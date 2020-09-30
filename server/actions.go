package server

import (
	"github.com/ilknarf/ez-kanban/api"
	"log"
	"net/http"
)

func addCard(r *http.Request, h *Hub) {
	card, err := api.AddCard(r)
	if err != nil {
		log.Println(err)
		return
	}

	h.broadcast <- WebSocketResponse{
		MessageType:"AddCard",
		Arguments: struct {
			ObjectKey string
			Card api.Card
		}{
			ObjectKey: card.Id,
			Card: card,
		},
	}
}