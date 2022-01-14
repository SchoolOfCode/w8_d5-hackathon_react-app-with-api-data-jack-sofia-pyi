import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home/index.js";
import Ingredients from "../Ingredients";
import SearchPage from "../SearchPage";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [cocktail, setCocktail] = useState(null);
  console.log("app render");

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
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home randomCocktail={cocktail} />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
