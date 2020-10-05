import React from 'react';
import './filters.css';
import Filter from '../../components/filter';

function Filters() {
  return (
    <div className="filters">
      <Filter text="Type of Co-Op" />
      <Filter text="# of Players" />
      <Filter text="Genres" />
      <Filter text="Themes" />
      <Filter text="Keywords" />
      <Filter text="Platforms" />
    </div>
  );
}

export default Filters;
