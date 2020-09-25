import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./home/header";
import Section from "./home/game-categories"
import axios from "axios";
import { Game } from "./types/Game";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/json").then((res) => {
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
        <Route path="/game">
          <GamePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Section />
    </>
  );
}

function Browse({ games }: { games: Game[] }) {
  return (
    <div className="browse">
      <Filters />
      <GameList games={games} />
    </div>
  );
}

function GameList({ games }: { games: Game[] }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

function Filters() {
  return (
    <div className="filters">
      <FilterInput text="Type of Co-Op" />
      <FilterInput text="# of Players" />
      <FilterInput text="Genres" />
      <FilterInput text="Themes" />
      <FilterInput text="Keywords" />
      <FilterInput text="Platforms" />
    </div>
  );
}

function FilterInput({ text }: { text: string }) {
  return (
    <div>
      <div className="name">{text}</div>
      <div>
        <select defaultValue="Any" className="filter-input"></select>
      </div>
    </div>
  );
}

function GameCard({ game }: { game: Game }) {
  let backgroundUrl = ``;
  if (game.cover !== undefined) {
    backgroundUrl = `https://images.igdb.com/igdb/image/upload/t_cover_small/${game.cover.image_id}.jpg`;
  } else {
    backgroundUrl = "http://placehold.it/360x360";
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

function GamePage() {
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

function CarouselItem() {
  return (
    <div className="carousel-item">
      <img src="https://via.placeholder.com/220x130" alt=""></img>
    </div>
  );
}

export default App;
