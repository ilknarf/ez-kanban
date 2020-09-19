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
}

type WebSocketClient struct {
	userId string
	hub    *Hub
	conn   *websocket.Conn
	send   chan interface{}
}

// readPump runs one goroutine per connection, managing and sending wss messages
func (c *WebSocketClient) readPump() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()
	// set
	c.conn.SetReadLimit(maxMessageSize)
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error {
		c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil
	})

	for {
		message := WebsocketRequest{}
		err := c.conn.ReadJSON(&message)
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}
		// TODO add backend logic
		c.hub.broadcast <- message
	}
}

func (c *WebSocketClient) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		c.conn.Close()
	}()
	for {
		select {
		case message, ok := <- c.send:
			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			response := WebsocketResponse{[]interface{}{message}}
			n := len(c.send)
			for i := 0; i < n; i++ {
				response.actions = append(response.actions, <- c.send)
			}
			c.conn.WriteJSON(response)
		}
	}

}

func establishConnection(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		response := ServerResponse{
			message: "Unable to upgrade connection",
		}

		w.WriteHeader(500)

		body, err := json.Marshal(response)
		if err != nil {
			log.Printf("Unable to marshal ServerResponse struct: %s\n", err)
		}

		_, err = w.Write(body)

		if err != nil {
			log.Println("Unable to write to ResponseWriter")
		}
	}

	client := WebSocketClient{
		userId: "placeholder", // STUB
		conn: conn,
	}

	// Success
	response := ServerResponse{}
	w.WriteHeader(200)

	body, err := json.Marshal(response)
	if err != nil {
		log.Printf("Unable to marshal ServerResponse struct: %s\n", err)
	}

	_, err = w.Write(body)
	if err != nil {
		log.Println("Unable to write to ResponseWriter")
	}

	go client.writePump()
	go client.readPump()
}