import React from 'react';
import './filters.css';
import Filter from '../../components/filter';
import Game from '../../types/Game';

function Filters({ games }: { games: Game[] }) {
  return (
    <div className="filters">
      <Filter games={games} queries={MODES} text="Type of Co-Op" />
      <Filter games={games} text="# of Players" />
      <Filter games={games} queries={GENRES} text="Genres" />
      <Filter games={games} queries={THEMES} text="Themes" />
      <Filter games={games} text="Keywords" />
      <Filter games={games} queries={PLATFORMS} text="Platforms" />
    </div>
  );
}

const MODES = ['Battle Royale', 'Co-operative', 'Massively Multiplayer Online (MMO)', 'Multiplayer', 'Split screen'];

const GENRES = [
  'Point-and-click',
  'Fightning',
  'Shooter',
  'Music',
  'Platform',
  'Puzzle',
  'Racing',
  'Real Time Strategy (RTS)',
  'Role-playing (RPG)',
  'Simulator',
  'Sport',
  'Strategy',
  'Turn-based strategy (TBS)',
  'Tactical',
  'Quiz/Trivia',
  "Hack and slash/Beat 'em up",
  'Pinball',
  'Adventure',
  'Arcade',
  'Visual Novel',
  'Indie',
  'Card & Board Game',
  'MOBA',
];

const THEMES = [
  'Fantasy',
  'Thriller',
  'Science fiction',
  'Action',
  'Horror',
  'Survival',
  'Historical',
  'Stealth',
  'Business',
  'Comedy',
  'Drama',
  'Non-fiction',
  'Educational',
  'Sandbox',
  'Kids',
  'Open world',
  'Warfare',
  '4X (explore, expand, exploit, exterminate)',
  'Erotic',
  'Mystery',
  'Party',
  'Romance',
];

const PLATFORMS = [
  'PC (Microsoft Windows)',
  'Linux',
  'Mac',
  'Playstation 4',
  'Xbox One',
  'Nintendo Switch',
  'Playstation 3',
  'Xbox 360',
];

export default Filters;
