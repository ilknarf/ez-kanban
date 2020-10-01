package server

type WebSocketResponse struct {
	MessageType string `json:"messageType"`
	Data        interface{} `json:"data"`
}

type WebsocketRequest struct {
	Action    string `json:"action"`
	ObjectKey string `json:"objectKey"`
	Args []string `json:"args"`
}
