import React from "react";
import Ingredients from "./Ingredients";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button>Ingredients</button>
      <Ingredients ingredients={ingredients} />
    </div>
  );
};

export default Recipe;
