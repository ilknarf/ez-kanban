package server

import (
	"log"
)

type Hub struct {
	boardId string
	clients map[*WebSocketClient]bool

	broadcast  chan []byte
	register   chan *WebSocketClient
	unregister chan *WebSocketClient
}

func NewHub(boardId string) *Hub {
	return &Hub{
		boardId: boardId,
		broadcast: make(chan []byte),
		register: make(chan *WebSocketClient),
		unregister: make(chan *WebSocketClient),
		clients: make(map[*WebSocketClient]bool),
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <- h.register:
			h.clients[client] = true
		case client := <- h.unregister:
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
				log.Printf("Client %s@%s closed\n", client.UserId, client.Address)
			}
		case message := <- h.broadcast:
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					delete(h.clients, client)
					close(client.send)
					log.Printf("Client %s@%s closed\n", client.UserId, client.Address)
				}
			}
		}
	}
}