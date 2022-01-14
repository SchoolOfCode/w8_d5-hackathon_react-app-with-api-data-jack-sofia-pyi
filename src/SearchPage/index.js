import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import Result from "../Result";

export default function SearchPage({ randomCocktail }) {
  return (
    <main>
      <SearchInput></SearchInput>
      {randomCocktail ? (
        <Result cocktailData={randomCocktail}></Result>
      ) : (
        <div></div>
      )}
    </main>
  );
}
