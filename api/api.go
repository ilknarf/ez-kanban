package api

import (
	"net/http"
	"time"
)

// placeholder values
var card1 = Card{
	Title:       "Title 1",
	Description: "This is a description",
	Id:          "String1",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var card2 = Card{
	Title:       "Title 2",
	Description: "This is another description",
	Id:          "String2",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var card3 = Card{
	Title:       "Title 3",
	Description: "This is a description",
	Id:          "String3",
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

	Cards: map[string]Card{
		card1.Id: card1,
		card2.Id: card2,
		card3.Id: card3,
	},
	Columns: Columns{
		Todo:       []string{"String1"},
		Waiting:    []string{"String2", "String3"},
		InProgress: []string{},
		Finished:   []string{},
	},
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
