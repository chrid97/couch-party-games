import React from 'react';
import { Game } from '../../types/Game';
import './browse.css';
import GameList from './game-list';
import Filters from './filters';

function Browse({ games }: { games: Game[] }) {
  return (
    <div className="browse">
      <Filters />
      <GameList games={games} />
    </div>
  );
}

export default Browse;
