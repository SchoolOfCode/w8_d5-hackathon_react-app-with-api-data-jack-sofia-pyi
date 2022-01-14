import React from "react";
import "./styles.css";

export default function ResultsRow({ resultsArr, handleChoice }) {
  return (
    <section className="results-slider">
      {resultsArr.map((item, index) => {
        return (
          <div
            className="drink-card"
            id = {index}
            key={index}
            onClick={() => handleChoice(index)}
          >
            <img src={item.strDrinkThumb} alt={item.strDrink}></img>
            <p>{item.strDrink}</p>
          </div>
        );
      })}
    </section>
  );
}
