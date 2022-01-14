import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import Result from "../Result";
import "./styles.css";

export default function Home({ randomCocktail }) {
  return (
    <main>
      <SearchInput
        className="bigSearch"
        placeholder="Search by cocktail"
      ></SearchInput>

      {randomCocktail ? (
        <Result cocktailData={randomCocktail}></Result>
      ) : (
        <div></div>
      )}
    </main>
  );
}
