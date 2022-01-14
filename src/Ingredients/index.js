import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import ResultsRow from "../ResultsRow";
import Result from "../Result";
import "./styles.css";

export default function Ingredients({ randomCocktail }) {
  const [item, setItems] = useState("");
  const [result, setResult] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [clickResult, setClickresult] = useState(null);

  console.log(clickResult);

  const popularIngredients = [
    "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
    "https://www.thecocktaildb.com/images/ingredients/Gin.png",
    "https://www.thecocktaildb.com/images/ingredients/Rum.png",
    "https://www.thecocktaildb.com/images/ingredients/Tequila.png",
  ];

  function handleChoice(id) {
    setRecipeId(id);
    console.log(recipeId);
  }

  function handleClick(choice) {
    setItems(choice);
  }

  useEffect(() => {
    async function fetchIngredients() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${item}`
      );
      let data = await res.json();
      setResult(data.drinks);
    }
    if (!item) {
      return;
    } else {
      fetchIngredients();
    }

    console.log(result);
  }, [item]);

  useEffect(() => {
    async function fetchById() {
      const res = await fetch(
        `https:/www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${result[recipeId].idDrink}`
      );
      let data = await res.json();
      setClickresult(data.drinks);
    }
    if (!item) {
      return;
    } else {
      fetchById();
    }

    console.log(result);
  }, [recipeId]);

  return (
    <section className="ingredients-section">
      <SearchInput></SearchInput>
      <div className="pop-ingredients">
        <img
          src={popularIngredients[0]}
          alt="vodka"
          onClick={() => handleClick("vodka")}
        ></img>
        <img
          src={popularIngredients[1]}
          alt="gin"
          onClick={() => handleClick("gin")}
        ></img>
        <img
          src={popularIngredients[2]}
          alt="rum"
          onClick={() => handleClick("rum")}
        ></img>
        <img
          src={popularIngredients[3]}
          alt="tequila"
          onClick={() => handleClick("tequila")}
        ></img>
      </div>

      {result ? (
        <ResultsRow
          handleChoice={handleChoice}
          resultsArr={result}
        ></ResultsRow>
      ) : (
        <div></div>
      )}

      {clickResult ? (
        <Result cocktailData={clickResult[0]}></Result>
      ) : (
        <div></div>
      )}
    </section>
  );
}
