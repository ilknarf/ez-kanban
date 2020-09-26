package server

import (
	"github.com/ilknarf/ez-kanban/api"
	"net/http"
)

func NewWebSocketHandler(h *Hub) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		establishConnection(w, r, h)
	}
}

func NewAddCardHandler(h *Hub) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		api.AddCard(r)

		establishConnection(w, r, h)
	}
}