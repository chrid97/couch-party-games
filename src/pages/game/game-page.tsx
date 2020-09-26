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

  return (
    <div className="container">
      <div className="carousel center">
        <div className="banner"></div>
        <div className="carousel-items">
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </div>
      <div>Fall Guys</div>
      <section># of Players Platform Genre Theme</section>
    </div>
  );
}

export default GamePage;
