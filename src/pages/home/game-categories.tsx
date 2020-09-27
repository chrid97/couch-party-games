import React from 'react';
import './game-categories.css';
import Card from  '../../components/card';

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



export default Section;
