import React from "react";

export default function Result({ cocktailData }) {
  const ingredients = {
    ...cocktailData.strIngredients1,
    ...cocktailData.strIngredients2,
    ...cocktailData.strIngredients3,
    ...cocktailData.strIngredients4,
    ...cocktailData.strIngredients5,
    ...cocktailData.strIngredients6,
    ...cocktailData.strIngredients7,
    ...cocktailData.strIngredients8,
    ...cocktailData.strIngredients9,
    ...cocktailData.strIngredients10,
  };

  const ingredientsArr = ingredients.values();

  return (
    <section>
      <h2>{cocktailData.strDrink}</h2>
      <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink}></img>
      <ul>
        {ingredientsArr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <p>{cocktailData.strInstructions}</p>
    </section>
  );
}
