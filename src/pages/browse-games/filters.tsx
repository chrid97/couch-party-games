import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './filters.css';
import Filter from '../../components/filter';
import Game from '../../types/Game';
import axios from 'axios';

function Filters({ games, setFilteredGames }: { games: Game[]; setFilteredGames: Dispatch<SetStateAction<Game[]>> }) {
  const [genres, setGenres] = useState([]);
  const [gameModes, setGameModes] = useState([]);
  const [themes, setThemes] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  useEffect(getSearchCriteria, []);
  const [themeOptions, setThemeOption] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [platformOptions, setPlatformOptions] = useState([]);
  const [gameModeOptions, setGameModeOptions] = useState([]);

  function getSearchCriteria(): void {
    axios
      .all([
        axios.get('http://localhost:4000/genres'),
        axios.get('http://localhost:4000/themes'),
        axios.get('http://localhost:4000/platforms'),
        axios.get('http://localhost:4000/game_modes'),
      ])
      .then(
        axios.spread((genres, themes, platforms, gameModes) => {
          setGenres(genres.data);
          setGameModes(gameModes.data);
          setThemes(themes.data);
          setPlatforms(platforms.data);
          console.log(genres.data)
          console.log(themes.data)
          console.log(platforms.data)
          console.log(gameModes.data)
        }),
      );
  }

  return (
    <div className="filters">
      <Filter games={games} setFilteredGames={setFilteredGames} queries={gameModes} text="Type of Co-Op" />
      <Filter games={games} setFilteredGames={setFilteredGames} text="# of Players" />
      <Filter games={games} setFilteredGames={setFilteredGames} queries={genres} text="Genres" />
      <Filter games={games} setFilteredGames={setFilteredGames} queries={themes} text="Themes" />
      {/* <Filter games={games} setFilteredGames={setFilteredGames} text="Keywords" /> */}
      <Filter games={games} setFilteredGames={setFilteredGames} queries={platforms} text="Platforms" />
    </div>
  );
}

const MODES = ['Battle Royale', 'Co-operative', 'Massively Multiplayer Online (MMO)', 'Multiplayer', 'Split screen'];

const GENRES = [
  'Point-and-click',
  'Fightning',
  'Shooter',
  'Music',
  'Platform',
  'Puzzle',
  'Racing',
  'Real Time Strategy (RTS)',
  'Role-playing (RPG)',
  'Simulator',
  'Sport',
  'Strategy',
  'Turn-based strategy (TBS)',
  'Tactical',
  'Quiz/Trivia',
  "Hack and slash/Beat 'em up",
  'Pinball',
  'Adventure',
  'Arcade',
  'Visual Novel',
  'Indie',
  'Card & Board Game',
  'MOBA',
];

const THEMES = [
  'Fantasy',
  'Thriller',
  'Science fiction',
  'Action',
  'Horror',
  'Survival',
  'Historical',
  'Stealth',
  'Business',
  'Comedy',
  'Drama',
  'Non-fiction',
  'Educational',
  'Sandbox',
  'Kids',
  'Open world',
  'Warfare',
  '4X (explore, expand, exploit, exterminate)',
  'Erotic',
  'Mystery',
  'Party',
  'Romance',
];

const PLATFORMS = [
  'PC (Microsoft Windows)',
  'Linux',
  'Mac',
  'Playstation 4',
  'Xbox One',
  'Nintendo Switch',
  'Playstation 3',
  'Xbox 360',
];

export default Filters;
