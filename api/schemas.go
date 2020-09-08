package api

import "time"

type ActionResponse struct {
	ResponseCode int
	Message string
}

type StateResponse struct {
	ResponseCode int
	State State
}

type State struct {
	*MetaData

	Todo       []Card
	Waiting    []Card
	InProgress []Card
	Finished   []Card
}

type MetaData struct {
	Name        string
	Tag         string
	Id          string
	DateCreated time.Time
	DateUpdated time.Time
}

type Card struct {
	Title       string
	Description string
	Id          string
	DateCreated time.Time
	DateUpdated time.Time
}
