package server

import (
	"log"
	"net/http"
)

func addCard(r *http.Request, h *Hub) {
	card, err := AddCard(r)
	if err != nil {
		log.Println(err)
		return
	}

	h.broadcast <- &WebSocketResponse{
		MessageType: "AddCard",
		Data: struct {
			ObjectKey string
			Card      Card
		}{
			ObjectKey: card.Id,
			Card:      card,
		},
	}
}
