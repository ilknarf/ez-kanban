package api

import "time"

// API response types

type ActionResponse struct {
	ResponseCode int
	Message      string
}

type SnapshotResponse struct {
	ResponseCode int
	State        State
}

// Board data structures

type State struct {
	MetaData

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

// Request data structures

type MoveCardRequest struct {
	BoardId   string
	CardId    string
	PrevIndex string
	NewIndex  string
}

// probaby should add more metadata
type AddCardRequest struct {
	NewCard Card
}
