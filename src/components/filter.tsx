import React, { Dispatch, SetStateAction } from 'react';
import Game from '../types/Game';
import './filter.css';
import Select from 'react-select';

interface Option {
  value: number;
  label: string;
}

let genreOptions: Option[] = [];
let themeOptions: Option[] = [];
let platformOptions: Option[] = [];
let gameModeOptions: Option[] = [];

function handleGenreFilter(
  options: any,
  games: Game[],
  setFilteredgames: Dispatch<SetStateAction<Game[]>>,
  filterType: string,
) {
  if (options == undefined) {
    options = [];
  }

  if (filterType === 'Genres') {
    genreOptions = options;
  } else if (filterType === 'Themes') {
    themeOptions = options;
  } else if (filterType === 'Platforms') {
    platformOptions = options;
  } else if (filterType === 'Type of Co-Op') {
    gameModeOptions = options;
  }

  const filteredGames = games
    .filter((game) => genreOptions.every((option) => game.genres.map((genre) => genre.id).includes(option.value)))
    .filter((game) => themeOptions.every((option) => game.themes.map((theme) => theme.id).includes(option.value)))
    .filter((game) =>
      gameModeOptions.every((option) => game.game_modes.map((gameMode) => gameMode.id).includes(option.value)),
    )
    .filter((game) =>
      platformOptions.every((option) => game.platforms.map((platform) => platform.id).includes(option.value)),
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
  const options = queries?.map(
    (query): Option => {
      return { value: query.id, label: query.name };
    },
  );

  return (
    <Select
      options={options}
      isMulti
      className="filter"
      placeholder={text}
      onChange={(e) => handleGenreFilter(e, games, setFilteredGames, text)}
    ></Select>
  );
}

export default Filter;
