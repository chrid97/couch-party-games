import React from 'react';
import './filter-input.css';

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

export default FilterInput;
