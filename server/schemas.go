package server

type ServerResponse struct {
	message string
}

type WebsocketRequest struct {
	action    string
	objectKey string
	arguments []int
}

type WebsocketResponse struct {
	actions []interface{}
}