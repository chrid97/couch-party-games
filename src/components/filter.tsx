import React from 'react';
import './filter.css';

function Filter({ text, queries }: { text: string; queries?: string[] }) {
  return (
    <div>
      {/* maybe replace div with label */}
      <div className="name">{text}</div>
      <div>
        <input className="filter" list={text}></input>
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
