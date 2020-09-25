import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MagnifyingGlass from "./images/magnifying-glass.svg";
import axios from "axios";

export interface Game {
  id: number;
  name: string;
  game_modes: [];
  cover: Cover;
  multiplayerModes: MultiplayerModes;
  genres: Genres;
  keywords: string[];
  platforms: any;
  player_perspectives: any;
  screenshots: Screenshot[];
  artworks: any;
  storyline: string;
  summary: string;
  tags: string[];
  themes: Theme[];
  url: string;
  videos: Video[];
  websites: string[];
}

export interface MultiplayerModes {
  id: number;
  campaigncoop: boolean;
  dropin: boolean;
  game: number;
  lancoop: boolean;
  offlinecoop: boolean;
  offlinecoopmax?: number; // exists if offlinecoop is true
  offlinemax?: number;
  onlinecoop: boolean;
  onlinecoopmax?: number; // exists if onlinecoop is true
  onlinemax?: number;
  platform?: number;
  splitscreen: boolean;
}

export interface Genres {
  id: number;
  name: string;
  slug: string;
}

export interface Cover {
  id: number;
  image_id: string;
}

export interface GameMode {
  id: number;
}

export interface Theme {
  id: number;
  image_id: string;
  slug: string;
}

export interface Screenshot {
  id: number;
  imageId: string;
}

export interface Cover {
  id: number;
  image_id: string;
}

export interface Video {
  id: number;
  video_id: string;
}

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
      </nav>

      <Switch>
        <Route path="/browse">
          <Browse games={games} />
        </Route>
        <Route path="/game">
          <Game />
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

function Header() {
  return (
    <header className="header center">
      <div className="center main">
        <h1>
          Discover what <span className="color">games</span> you&lsquo;ll play
          with your friends!
        </h1>
        <div className="search-bar center">
          <img src={MagnifyingGlass} alt="Magnifying Glass" />
          <input
            className="search"
            type="text"
            placeholder="Type in your favorite game to get similar games!"
          ></input>
        </div>
      </div>
    </header>
  );
}

function Section() {
  return (
    <section className="game-categories center">
      <section className="section2">
        <Card title="Campaign Co-Op" />
        <Card title="Couch Co-Op" />
        <Card title="Online Co-Op" />
        <Card title="Massively Multiplayer" />
      </section>
    </section>
  );
}

function Card({ title }: { title: string }) {
  return (
    <Link to="/browse" className="card center">
      <h2>{title}</h2>
      <button>Browse Games</button>
    </Link>
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

function Game() {
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
