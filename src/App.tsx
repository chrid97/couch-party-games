import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MagnifyingGlass from './images/magnifying-glass.svg';

function App() {
  return (
    <div className="App center">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
      </nav>

      <Switch>
        <Route path="/browse">
          <Browse />
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

function Browse() {
  return (
    <div className="browse">
      <Filters />
      <GameList />
    </div>
  );
}

function GameList() {
  return (
    <div className="game-list">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}

function Filters() {
  return (
    <div className="filters">
      <FilterInput text="Type of Co-Op" />
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

function GameCard() {
  return (
    <Link to="game" className="game-card">
      <div className="card2"></div>
      <p>Fall Guys</p>
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
