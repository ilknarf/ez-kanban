package api

import (
	"net/http"
	"time"
)

// placeholder values
var card1 = Card{
	Title:       "Title 1",
	Description: "This is a description",
	Id:          "String",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var card2 = Card{
	Title:       "Title 2",
	Description: "This is another description",
	Id:          "String",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var card3 = Card{
	Title:       "Title 3",
	Description: "This is a description",
	Id:          "String",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var metadata = MetaData{
	Name:        "Kanban Board",
	Tag:         "KB",
	Id:          "abcd",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var state = State{
	MetaData:   metadata,
	Todo:       []Card{card1},
	Waiting:    []Card{card2, card3},
	InProgress: []Card{},
	Finished:   []Card{},
}

func GetSnapshot(index string) State {
	return state
}

func AddCard(r *http.Request) (Card, error) {
	return Card{}, nil
}

func MoveCard(r *http.Request) error {
	return nil
}
