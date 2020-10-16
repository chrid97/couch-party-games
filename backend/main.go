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
	http.HandleFunc("/themes", getThemes)
	http.HandleFunc("/platforms", getPlatforms)
	http.HandleFunc("/game_modes", getGameModes)
	log.Fatal(http.ListenAndServe(":4000", nil))
}

