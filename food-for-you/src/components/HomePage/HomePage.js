import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.scss";
// import RecipeService from "../../../../server/services/RecipeService";
import axios from "axios";

function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    try {
      processRecipes();
    } catch(err) {
      console.log("Error: ", err)
    }
  }, []);

  async function processRecipes() {
    try {
      const response = await axios.get('http://localhost:8000/api/recipes');
      const data = response.data;  
      setRecipes(data.hits);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header class="header">
        <nav class="navbar">
          <Link to="/">
            <button className="logo">FoodForYou</button>
          </Link>
          <ul class="nav-links">
            <li class="nav-item">
              <Link to="/">
                <button className="homeButton">FoodForYou</button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup">
                <button className="signUpButton">Sign Up</button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <button className="loginButton">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <button id="myButton">+</button>

      <div class="cards-heading">
        <span class="subheading">Meals</span>
        <h2 class="heading-secondary">Recipes and shit</h2>
        <div class="container grid grid--3-cols margin-bottom-md ">
          {recipes.map((r) => (
            <div className="recipe-container">
              <div className="recipe-column">
                <div className="recipe-card">
                  <div className="recipe-img">
                    <img src={r.recipe.image} alt='Food'></img>
                  </div>
                  <div className="recipe-title"> 
                    <h4>
                    {r.recipe.label}
                    </h4>
                  </div>
                  <ul>
                    {r.recipe.dietLabels.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </div>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;