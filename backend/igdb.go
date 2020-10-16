package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

func getGames(w http.ResponseWriter, r *http.Request) {
	fields := []string{"name", "slug", "game_modes.name", "cover.image_id", "multiplayer_modes.*", "genres.name", "keywords.name", "platforms.name", "player_perspectives.name", "screenshots.image_id", "artworks.image_id", "storyline", "summary", "tags", "themes.name", "videos.video_id", "websites.url"}
	
	addRequiredHeaders(w)

	config, _ := readToml()

	query := fmt.Sprintf("fields %v; where %v; limit %v;", strings.Join(fields, ", "), createSlugs(config.Games), IGDB_MAX_LIMIT)
	resBody := strings.NewReader(query)
	client := &http.Client{}
	req, err := http.NewRequest("POST", "https://api.igdb.com/v4/games", resBody)
	req.Header.Add("Client-ID", config.ClientId)
	req.Header.Add("Authorization", config.Authorization)
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	w.Write([]byte(body))
}

func getGenres(w http.ResponseWriter, r *http.Request) {
	addRequiredHeaders(w)

	// Change this so I can access config without calling this twice
	config, _ := readToml()

	client := &http.Client{}
	
	reqBody := strings.NewReader("fields name;")
	req, err := http.NewRequest("POST", "https://api.igdb.com/v4/genres", reqBody)

	req.Header.Add("Client-ID", config.ClientId)
	req.Header.Add("Authorization", config.Authorization)
	
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	w.Write([]byte(body))
}

func addRequiredHeaders(w http.ResponseWriter) {
	w.Header().Set("Content-type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}
