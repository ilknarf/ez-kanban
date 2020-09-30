package api

import "time"

// Board data structures

type State struct {
	MetaData

	Cards   []Card
	Columns Columns
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

type Columns struct {
	Todo       []string
	Waiting    []string
	InProgress []string
	Finished   []string
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
