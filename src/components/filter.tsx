import React from 'react';
import './filter.css';

function Filter({ text }: { text: string }) {
  return (
    <div>
      <div className="name">{text}</div>
      <div>
        <select defaultValue="Any" className="filter"></select>
      </div>
    </div>
  );
}

export default Filter;
