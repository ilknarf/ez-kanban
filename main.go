package main

import (
	"fmt"
	"github.com/ilknarf/ez-kanban/server"
	"log"
	"net/http"
	"os"
)

var port string

func init() {
	if port = ":" + os.Getenv("SERVE_PORT"); port == ":" {
		log.Print("port not declared, serving on default :8080")
		port = ":8080"
	}
}

func main() {
	hub := server.NewHub("stub")
	go hub.Run()

	http.HandleFunc("/wss", server.NewWebSocketHandler(hub))
	http.HandleFunc("/hello", func (w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello!")
	})

	log.Printf("serving on port %s", port)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
