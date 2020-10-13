import React, { useState } from 'react';
import { Game } from '../../types/Game';
import './browse.css';
import GameList from './game-list';
import Filters from './filters';

function Browse({ games }: { games: Game[] }) {
  // fix this not existing when i refresh from /browse
  // probably just move api request to here because i dont need it on the main page (maybe)
  // bubble up all the state to here and filter from here
  const [filteredGames, setFilteredGames] = useState(games);
  
  return (
    <div className="browse">
      <Filters games={games} setFilteredGames={setFilteredGames}/>
      <GameList games={filteredGames} />
    </div>
  );
}

export default Browse;
