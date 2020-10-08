import React, { ChangeEvent } from 'react';
import Game from '../types/Game';
import './filter.css';

function handleFilter(event: ChangeEvent<HTMLInputElement>, games: Game[]) {
  const value = event.target.value;
  return console.log(games);
}

function Filter({ text, queries, games }: { text: string; queries?: string[]; games: Game[] }) {
  return (
    <div>
      {/* maybe replace div with label */}
      <div className="name">{text}</div>
      <div>
        <input className="filter" list={text} onChange={(e) => handleFilter(e, games)}></input>
        <datalist id={text}>
          {queries?.map((query, i) => {
            return <option key={i} value={query}></option>;
          })}
        </datalist>
      </div>
    </div>
  );
}

export default Filter;
