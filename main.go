package main

import (
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
	log.Printf("Serving on port %s.", port)
	log.Fatal(http.ListenAndServe(":8080", nil))
}