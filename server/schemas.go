package server

type ServerResponse struct {
	message string
}

type WebsocketRequest struct {
	Action    string
	ObjectKey string
	Args []string
}
