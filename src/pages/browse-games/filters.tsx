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

  function getSearchCriteria(): void {
    axios
      .all([
        axios.get('http://localhost:4000/genres'),
        axios.get('http://localhost:4000/themes'),
        axios.get('http://localhost:4000/platforms'),
        axios.get('http://localhost:4000/game_modes'),
      ])
      .then(
        // Cache this so it doesn't make a request everytime
        axios.spread((genres, themes, platforms, gameModes) => {
          setGenres(genres.data);
          setGameModes(gameModes.data);
          setThemes(themes.data);
          setPlatforms(platforms.data);
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

export default Filters;
