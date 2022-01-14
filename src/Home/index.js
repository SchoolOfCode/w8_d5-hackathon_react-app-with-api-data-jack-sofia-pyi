import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import Result from "../Result";

export default function Home() {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function fetchCocktail() {
      const res = await fetch(`www.thecocktaildb.com/api/json/v1/1/random.php
      `);
      const data = await res.json();
      setCocktail(data);
    }

    fetchCocktail();
  }, []);

  return (
    <main>
      <SearchInput></SearchInput>
      <Result cocktailData={cocktail}></Result>
    </main>
  );
}
