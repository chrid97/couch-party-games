import React from 'react';
import './game-card.css';
import { Link } from 'react-router-dom';
import { Game } from '../../types/Game';

function GameCard({ game }: { game: Game }) {
  let backgroundUrl = ``;
  if (game.cover !== undefined) {
    backgroundUrl = `https://images.igdb.com/igdb/image/upload/t_cover_small/${game.cover.image_id}.jpg`;
  } else {
    backgroundUrl = 'http://placehold.it/360x360';
  }
  return (
    <Link to="game" className="game-card">
      <div
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
        className="card2"
      ></div>
      <p>{game.name}</p>
    </Link>
  );
}

export default GameCard;
