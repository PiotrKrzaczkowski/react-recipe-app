import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Recipe = ({ recipe }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Check full recipe
      </a>
      <button onClick={() => setShowIngredients(!showIngredients)}>
        Ingredients
      </button>
      {showIngredients && <Ingredients ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
