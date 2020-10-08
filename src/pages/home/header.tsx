import React from 'react';
import MagnifyingGlass from '../../images/magnifying-glass.svg';
import Game from '../../types/Game';
import './header.css';

function Header({ games }: { games: Game[] }) {
  return (
    <header className="header center">
      <div className="center main">
        <h1>
          Discover what <span className="color">games</span> you&lsquo;ll play with your friends!
        </h1>
        <div className="search-bar center">
          <img src={MagnifyingGlass} alt="Magnifying Glass" />
          <input className="search" type="text" placeholder="Type in your favorite game to get similar games!"></input>
        </div>
      </div>
    </header>
  );
}

export default Header;
