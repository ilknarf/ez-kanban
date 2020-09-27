package server

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"time"
)

const (
	// Time allowed to write a message to the peer.
	writeWait = 10 * time.Second

	// Time allowed to read the next pong message from the peer.
	pongWait = 60 * time.Second

	// Send pings to peer with this period. Must be less than pongWait.
	pingPeriod = (pongWait * 9) / 10

	// Maximum message size allowed from peer.
	maxMessageSize = 512
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true //STUB
	},
}

type WebSocketClient struct {
	UserId  string
	Address string
	hub     *Hub
	conn    *websocket.Conn
	send    chan interface{}
}

// readPump runs one goroutine per connection, managing and sending wss messages
func (c *WebSocketClient) readPump() {
	defer func() {
		c.hub.unregister <- c
		_ = c.conn.Close()
	}()
	// set
	c.conn.SetReadLimit(maxMessageSize)
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error {
		c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil
	})

	for {
		_, b, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}

		// TODO add backend logic
		log.Printf("received message from `%s` at %s\n", c.UserId, c.Address)

		c.hub.broadcast <- b
	}
}

func (c *WebSocketClient) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		_ = c.conn.Close()
	}()
	for {
		select {
		case message, ok := <-c.send:
			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, nil)
				return
			}

			response := []interface{}{message}
			n := len(c.send)
			for i := 0; i < n; i++ {
				response = append(response, <-c.send)
			}
			var b []byte
			json.Unmarshal(b, response)

			c.conn.WriteMessage(websocket.TextMessage, b)
			log.Printf("message relayed to client %s@%s", c.UserId, c.Address)

		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}

}

func establishConnection(w http.ResponseWriter, r *http.Request, h *Hub) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		log.Println(err)

		return
	}

	source := getRemoteAddress(r)

	client := &WebSocketClient{
		UserId:  "placeholder", // TODO add logic
		Address: source,
		hub:     h,
		conn:    conn,
		send:    make(chan interface{}),
	}

	h.register <- client

	// run goroutines for connection broadcasting
	go client.writePump()
	go client.readPump()

	log.Printf("new websocket connection from %s\n", source)
}

func getRemoteAddress(r *http.Request) string {
	source := r.Header.Get("X-Forwarded-For")
	if source == "" {
		source = r.RemoteAddr
	}

	return source
}