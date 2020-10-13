import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Game from '../types/Game';
import './filter.css';

function handleFilter(
  event: ChangeEvent<HTMLInputElement>,
  games: Game[],
  setFilteredgames: Dispatch<SetStateAction<Game[]>>,
) {
  const value = event.target.value;
  const filteredGames = games.filter((game) => game.genres.map((genre) => genre.name).includes(value));
  // if (!Array.isArray(filteredGames) || !filteredGames.length) {
    // setFilteredgames(games);
  // } else {
    setFilteredgames(filteredGames);
  // }
}

function Filter({
  text,
  queries,
  games,
  setFilteredGames,
}: {
  text: string;
  queries?: string[];
  games: Game[];
  setFilteredGames: Dispatch<SetStateAction<Game[]>>;
}) {
  return (
    <div>
      {/* maybe replace div with label */}
      <div className="name">{text}</div>
      <div>
        <input className="filter" list={text} onChange={(e) => handleFilter(e, games, setFilteredGames)}></input>
        <datalist id={text}>
          {queries?.map((query, i) => {
            return <option key={i} value={query}></option>;
          })}
        </datalist>
      </div>
    </div>
  );
}

export default Filter;
