import React from "react";
import "./styles.css";

export default function Result({ cocktailData }) {
  //Create ingredients list
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
    11: cocktailData.strIngredient11,
    12: cocktailData.strIngredient12,
    13: cocktailData.strIngredient13,
    14: cocktailData.strIngredient14,
    15: cocktailData.strIngredient15,
  };
  //Convert object to array
  let ingredientsArr = Object.values(ingredients);
  //Remove nulls
  ingredientsArr = [...ingredientsArr.filter((item) => item)];

  return (
    <section className="resultSection">
      <h2>{cocktailData.strDrink}</h2>
      <div className="resultContent">
        <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink}></img>
        <div className="resultText">
          <h3>Ingredients:</h3>
          <ul>
            {ingredientsArr.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <h3>Instructions</h3>
          <p>{cocktailData.strInstructions}</p>
        </div>
      </div>
    </section>
  );
}
