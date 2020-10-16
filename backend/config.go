package main

import (
	"fmt"
	"github.com/BurntSushi/toml"
	"strings"
)

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
