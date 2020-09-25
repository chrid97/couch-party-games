import React from 'react';
import { Link } from "react-router-dom";
import "./game-categories.css";

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

export default Section;