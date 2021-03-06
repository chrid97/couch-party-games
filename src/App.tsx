import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './pages/home/header';
import Section from './pages/home/game-categories';
import axios from 'axios';
import { Game } from './types/Game';
import GamePage from './pages/game/game-page';
import Browse from './pages/browse-games/browse';

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/games').then((res) => {
      setGames(res.data);
      console.log(res);
    });
  }, []);

  return (
    <div className="App center">
      <Navbar games={games} />
    </div>
  );
}

function Navbar({ games }: { games: Game[] }) {
  return (
    <Router>
      <nav className="nav center">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
      </nav>

      <Switch>
        <Route path="/browse">
          <Browse games={games} />
        </Route>
        <Route path="/games/:gameSlug">
          <GamePage games={games} />
        </Route>
        <Route path="/">
          <Home games={games} />
        </Route>
      </Switch>
    </Router>
  );
}

function Home({ games }: { games: Game[] }) {
  return (
    <>
      <Header games={games} />
      <Section />
    </>
  );
}

export default App;
