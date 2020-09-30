package server

type Arguments = interface{}

type WebSocketResponse struct {
	MessageType string
	Arguments
}

type WebsocketRequest struct {
	Action    string
	ObjectKey string
	Args []string
}
