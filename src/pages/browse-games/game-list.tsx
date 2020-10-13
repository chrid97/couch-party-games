import React from 'react';
import { Game } from '../../types/Game';
import './game-list.css';
import GameCard from '../game/game-card';

function GameList({ games }: { games: Game[] }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
