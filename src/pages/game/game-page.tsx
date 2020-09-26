import React from 'react';
import { Game } from '../../types/Game';
import './game-page.css';
import CarouselItem from './carousel-item';

function GamePage({ game }: { game: Game }) {
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
