package server

import (
	"github.com/ilknarf/ez-kanban/api"
	"log"
	"net/http"
)

func NewWebSocketHandler(h *Hub) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		establishConnection(w, r, h)
	}
}