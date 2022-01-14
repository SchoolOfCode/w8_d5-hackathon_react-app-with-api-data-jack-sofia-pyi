import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <Link to="/ingredients">
        <h1>Ingredients</h1>
      </Link>

      <h1>Cocktails</h1>

      <SearchInput placeholder="Search by cocktail"></SearchInput>
    </nav>
  );
}
