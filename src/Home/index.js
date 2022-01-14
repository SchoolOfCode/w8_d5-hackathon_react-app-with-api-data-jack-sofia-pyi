import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import Result from "../Result";

export default function Home() {
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    async function fetchCocktail() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      let data = await res.json();
      setCocktail(data.drinks[0]);
    }
    fetchCocktail();
  }, []);
  return (
    <main>
      <SearchInput></SearchInput>
      {cocktail ? <Result cocktailData={cocktail}></Result> : <div></div>}
    </main>
  );
}
