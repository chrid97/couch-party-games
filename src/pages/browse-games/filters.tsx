import React from "react";
import "./filters.css";
import FilterInput from "../../components/filter-input"

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

export default Filters;