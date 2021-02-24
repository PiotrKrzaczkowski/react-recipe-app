import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [recipes, setRecipes] = useState([]);

  const app_ID = "1c2ffc93";
  const app_KEY = "ccb924fb4b07a1b3eddae7ac235ced46";
  const URL = `https://api.edamam.com/search?q=${foodName}&app_id=${app_ID}&app_key=${app_KEY}`;

  const getData = async () => {
    const result = await Axios.get(URL);
    setRecipes(result.data.hits);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>get data recipe</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search food"
          autoComplete="off"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
