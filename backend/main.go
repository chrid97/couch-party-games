package main

import (
	"io/ioutil"
	"log"
	"net/http"
)

const IGDB_MAX_LIMIT uint16 = 500

func main() {
	handleRequests()
}

func handleRequests() {
	http.HandleFunc("/games", getGames)
	http.HandleFunc("/genres", getGenres)
	http.HandleFunc("/json", serveJson)
	log.Fatal(http.ListenAndServe(":4000", nil))
}

func serveJson(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	body, err := ioutil.ReadFile("./games.json")
	if err != nil {
		log.Fatalln(err)
	}
	w.Write([]byte(body))
}
