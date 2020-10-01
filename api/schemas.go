package api

import "time"

// Board data structures

type State struct {
	MetaData

	Cards   map[string]Card  `json:"cards"`
	Columns Columns `json:"columns"`
}

type MetaData struct {
	Name        string `json:"name"`
	Tag         string `json:"tag"`
	Id          string `json:"id"`
	DateCreated time.Time `json:"dateCreated"`
	DateUpdated time.Time `json:"dateUpdated"`
}

type Card struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Id          string `json:"id"`
	DateCreated time.Time `json:"dateCreated"`
	DateUpdated time.Time `json:"dateUpdated"`
}

type Columns struct {
	Todo       []string `json:"todo"`
	Waiting    []string `json:"waiting"`
	InProgress []string `json:"inProgress"`
	Finished   []string `json:"finished"`
}

// Request data structures

type MoveCardRequest struct {
	BoardId   string `json:"boardId"`
	CardId    string `json:"cardId"`
	PrevIndex string `json:"prevIndex"`
	NewIndex  string `json:"newIndex"`
}

// probaby should add more metadata
type AddCardRequest struct {
	NewCard Card `json:"newCard"`
}
