package server

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type WebSocketClient struct {
	userId string
	hub    *Hub
	conn   *websocket.Conn
	send   chan []byte
}

func (w *WebSocketClient) writePump() {

}

func (w *WebSocketClient) readPump() {

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