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
            <h1>{game.name}</h1>
            <div>
              Platforms:{' '}
              {game.platforms.map((platform) => (
                <span key={platform.id}>{platform.name} | </span>
              ))}
            </div>
            <div>
              Themes:{' '}
              {game.themes.map((theme) => (
                <span key={theme.id}>{theme.name} | </span>
              ))}
            </div>
            <div>
              Player Perspective:{' '}
              {game.player_perspectives.map((perspective) => (
                <span key={perspective.id}>{perspective.name} | </span>
              ))}
            </div>
            <div>
              Game Modes:{' '}
              {game.game_modes.map((gameMode) => (
                <span key={gameMode.id}>{gameMode.name} | </span>
              ))}
            </div>
            <div>
              Genres:{' '}
              {game.genres.map((genre) => (
                <span key={genre.id}>{genre.name} | </span>
              ))}
            </div>
            <div>
              Keywords:{' '}
              {game.keywords.map((keyword) => (
                <span key={keyword.id}>{keyword.name} | </span>
              ))}
            </div>
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
