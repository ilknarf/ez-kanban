package server

import "net/http"

func NewWebSocketHandler(h *Hub) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		establishConnection(w, r, h)
	}
}