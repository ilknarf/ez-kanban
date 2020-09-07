package api

import "time"

type StateResponse struct {
	*MetaData
	ResponseCode int

	Todo       []Card
	Waiting    []Card
	InProgress []Card
	Finished   []Card
}

type MetaData struct {
	Name        string
	Tag         string
	DateCreated time.Time
	DateUpdated time.Time
}

type Card struct {
}
