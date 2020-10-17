import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Game from '../types/Game';
import './filter.css';

const themeOptions: string[] = [];
const genreOptions: string[] = [];
const platformOptions: string[] = [];
const gameModeOptions: string[] = [];

function handleGenreFilter(
  event: ChangeEvent<HTMLInputElement>,
  games: Game[],
  setFilteredgames: Dispatch<SetStateAction<Game[]>>,
  filterType: string,
) {
  const value = event.target.value;
  if (value === '' && filterType === 'Genres') {
    genreOptions.pop();
  } else if (value === '' && filterType === 'Themes') {
    themeOptions.pop();
  } else if (value === '' && filterType === 'Platforms') {
    platformOptions.pop();
  } else if (value === '' && filterType === 'Type of Co-Op') {
    gameModeOptions.pop();
  } else if (filterType === 'Genres') {
    genreOptions.push(value);
  } else if (filterType === 'Themes') {
    themeOptions.push(value);
  } else if (filterType === 'Platforms') {
    platformOptions.push(value);
  } else if (filterType === 'Type of Co-Op') {
    gameModeOptions.push(value);
  }

  const filteredGames = games
    .filter((game) => genreOptions.every((option) => game.genres.map((genre) => genre.id).includes(Number(option))))
    .filter((game) => themeOptions.every((option) => game.themes.map((theme) => theme.id).includes(Number(option))))
    .filter((game) =>
      gameModeOptions.every((option) => game.game_modes.map((gameMode) => gameMode.id).includes(Number(option))),
    )
    .filter((game) =>
      platformOptions.every((option) => game.platforms.map((platform) => platform.id).includes(Number(option))),
    );

  setFilteredgames(filteredGames);
}

interface FilterProps {
  text: string;
  queries?: any[];
  games: Game[];
  setFilteredGames: Dispatch<SetStateAction<Game[]>>;
}

function Filter({ text, queries, games, setFilteredGames }: FilterProps) {
  return (
    <div>
      {/* maybe replace div with label */}
      <div className="name">{text}</div>
      <div>
        <input
          className="filter"
          list={text}
          onChange={(e) => handleGenreFilter(e, games, setFilteredGames, text)}
        ></input>
        <datalist id={text}>
          {queries?.map((query, i) => {
            return <option key={i} value={query.id} label={query.name}></option>;
          })}
        </datalist>
      </div>
    </div>
  );
}

export default Filter;
