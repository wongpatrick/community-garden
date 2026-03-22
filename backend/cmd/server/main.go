package main

import (
	"flag"
	"log"
	"net/http"

	"community-garden/backend/internal/engine"
)

var addr = flag.String("addr", ":8080", "http service address")

func main() {
	flag.Parse()
	// Initialize Engine
	gardenEngine := engine.NewGardenEngine()
	// Initialize Hub

	// Define Websocket
	// http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
	// 	serveWs(hub, w, r)
	// })

	// Start the Http Server
	log.Println("Garden Server started on ")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Could not start server: ", err)
	}
}