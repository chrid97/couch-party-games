import React from 'react';
import { Game } from '../../types/Game';
import { useParams } from 'react-router-dom';
import './game-page.css';
import CarouselItem from './carousel-item';
import GameCard from './game-card';

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
    backgroundUrl = `https://images.igdb.com/igdb/image/upload/t_1080p/${game.screenshots[2].image_id}.jpg`;
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
            {/* <GameCard game={game} /> */}
            <h1>{game.name}</h1>
            <ItemList items={game.platforms} text={'Platforms'} />
            <ItemList items={game.themes} text={'Themes'} />
            <ItemList items={game.player_perspectives} text={'Player Perspective'} />
            <ItemList items={game.game_modes} text={'Game Modes'} />
            <ItemList items={game.genres} text={'Genres'} />
            <ItemList items={game.keywords} text={'Keywords'} />
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

function ItemList({ items, text, className='chip' }: { items: any; text: string; className?: string }) {
  return (
    <div className={className}>
      {text}:{' '}
      {items.map((item: any) => (
        <span key={item.id}>{item.name} | </span>
      ))}
    </div>
  );
}

export default GamePage;
