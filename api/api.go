package api

import (
	"time"
)


// placeholder values
var card1 = Card{
	Title: "Title 1",
	Description: "This is a description",
	Id: "String",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var card2 = Card{
	Title: "Title 2",
	Description: "This is another description",
	Id: "String",
	DateCreated: time.Now(),
	DateUpdated: time.Now(),
}

var card3 = Card{
	Title: "Title 3",
	Description: "This is a description",
	Id: "String",
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
	MetaData: metadata,
	Todo: []Card{card1},
	Waiting: []Card{card2, card3},
	InProgress: []Card{},
	Finished: []Card{},
}

var snapshotResponse = SnapshotResponse{
	ResponseCode: 200,
	State: state,
}

func GetSnapshot(index string) SnapshotResponse {
	return snapshotResponse
}

func AddCard(c Card) ActionResponse {

}

func MoveCard()