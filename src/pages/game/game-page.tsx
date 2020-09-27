import React from 'react';
import { Game } from '../../types/Game';
import { useParams } from 'react-router-dom';
import './game-page.css';
import CarouselItem from './carousel-item';

interface ParamTypes {
  gameSlug: string;
}

function GamePage({ games }: { games: Game[] }) {
  const { gameSlug } = useParams<ParamTypes>();
  const game: Game | undefined = games.find((game) => game.slug === gameSlug);

  if (game === undefined) {
    return <div>404</div>;
  }

  let backgroundUrl = ``;
  if (game.cover !== undefined) {
    backgroundUrl = `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`;
  } else {
    backgroundUrl = 'http://placehold.it/360x360';
  }

  return (
    <div className="container">
      <div className="carousel center">
        <div style={{ backgroundImage: `url(${backgroundUrl})` }} className="banner"></div>
        {/* <div className="carousel-items">
          <CarouselItem />
        </div> */}
      </div>
      <div className="game-content">
        <div className="header2">
          <div className="main-content">
            <h1>{game.name}</h1>
            <div>Platforms</div>
            <div># of Players Platform Genre Theme</div>
            <p className="summary">{game.summary}</p>
          </div>
        </div>
        <div className="images">
          {game.screenshots.map((screenshots) => (
            <img
              key={screenshots.id}
              src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots.image_id}.jpg`}
              alt="game"
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GamePage;
