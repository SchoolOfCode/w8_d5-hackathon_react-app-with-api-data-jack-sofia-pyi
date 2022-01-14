import React from "react";

export default function Result({ cocktailData }) {
  const ingredients = {
    1: cocktailData.strIngredient1,
    2: cocktailData.strIngredient2,
    3: cocktailData.strIngredient3,
    4: cocktailData.strIngredient4,
    5: cocktailData.strIngredient5,
    6: cocktailData.strIngredient6,
    7: cocktailData.strIngredient7,
    8: cocktailData.strIngredient8,
    9: cocktailData.strIngredient9,
    10: cocktailData.strIngredient10,
  };

  const ingredientsArr = Object.values(ingredients);

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
