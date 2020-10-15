package main

import (
	"fmt"
	"github.com/BurntSushi/toml"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

const IGDB_MAX_LIMIT uint16 = 500

func main() {
	handleRequests()
}

func handleRequests() {
	http.HandleFunc("/games", getGames)
	http.HandleFunc("/json", serveJson)
	log.Fatal(http.ListenAndServe(":4000", nil))
}

func getGames(w http.ResponseWriter, r *http.Request) {
	fields := []string{"name", "slug", "game_modes.name", "cover.image_id", "multiplayer_modes.*", "genres.name", "keywords.name", "platforms.name", "player_perspectives.name", "screenshots.image_id", "artworks.image_id", "storyline", "summary", "tags", "themes.name", "videos.video_id", "websites.url"}

	config, _ := readToml()
	
	w.Header().Set("Content-type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	query := fmt.Sprintf("fields %v; where %v; limit %v;", strings.Join(fields, ", "), createSlugs(config.Games), IGDB_MAX_LIMIT)
	resBody := strings.NewReader(query)
	client := &http.Client{
		// CheckRedirect: redirectPolicyFunc,
	}
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

type config struct {
	ClientId string
	Authorization string
	Games []game
}

type game struct {
	Slug string
}

func readToml() (*config, error) {
	var config config
	if _, err := toml.DecodeFile("games.toml", &config); err != nil {
		fmt.Println(err)
		return nil, err
	}
	
	return &config, nil
}

func createSlugs(games []game) string { 
	conditions := []string{}
	for _, game := range games {
		slug := fmt.Sprintf(`(slug = "%v")`, game.Slug)
		conditions = append(conditions, slug)
	}

	return strings.Join(conditions, " | ")
}
