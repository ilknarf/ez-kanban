package server

import (
	"encoding/json"
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

	var b []byte
	json.Unmarshal(b, card)

	h.broadcast <- WebsocketRequest{
		Action:"AddCard",
		ObjectKey: card.Id,
		Args:[]string{string(b)},
	}
}