import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

function Card({ title }: { title: string }) {
  return (
    <Link to="/browse" className="card center">
      <h2>{title}</h2>
      <button>Browse Games</button>
    </Link>
  );
}

export default Card;