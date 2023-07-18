import "./styles.css";
import React, { useState, useEffect } from "react";
import apiAdapter from "./services/apiAdapter";
import { RECIPES } from "./Constants";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    apiAdapter
      .getRecipes(RECIPES.SEARCH_RECIPES, {})
      .then((response) => setRecipes(response?.results));
  }, []);

  return (
    <div className="App">
      <h1>spoonacular API - UI</h1>
      {recipes?.length &&
        recipes.map((ele) => (
          <div>
            <img src={ele.image} alt={ele.title} />
            <h3>{ele.title}</h3>
            <p>ID: {ele.id}</p>
            <p>Image Type: {ele.imageType}</p>
          </div>
        ))}
    </div>
  );
}
