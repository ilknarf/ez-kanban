package server

type Hub struct {
	boardId string
	clients map[*WebSocketClient]bool

	broadcast  chan []byte
	register   chan *WebSocketClient
	unregister chan *WebSocketClient
}

func newHub(boardId string) *Hub {
	return &Hub{
		boardId: boardId,
		broadcast: make(chan []byte),
		register: make(chan *WebSocketClient),
		unregister: make(chan *WebSocketClient),
		clients: make(map[*WebSocketClient]bool),
	}
}

func (h *Hub) run() {
	for {
		select {
		case client := <- h.register:
			h.clients[client] = true
		case client := <- h.unregister:
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}
		case message := <- h.broadcast:
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		}
	}
}