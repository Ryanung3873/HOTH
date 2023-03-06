import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeService from "../RecipeService";
import axios from "axios";

function Home() {
  const [recipes, setRecipes] = useState([]);

  const path = "https://api.edamam.com/api/recipes/v2";
  const app_key = "b4855e48bc82953649f39782f5495c5a";
  const app_id = "6102af6d";
  console.log("outside", recipes);
  useEffect(() => {
    getSomething();
  }, []);

  function getSomething() {
    axios
      .get(
        path +
          "?app_id=" +
          app_id +
          "&app_key=" +
          app_key +
          "&type=public&diet=high-protein"
      )
      .then((response) => {
        setRecipes(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((e) => console.log(e));
    // console.log(typeof(recipes));
  }

  return (
    <div className="App">
      <header class="header">
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li class="btn">
              <Link to="/Signup">
                {" "}
                <button className="signUpButton">SignUp</button>
              </Link>
            </li>
            <li class="btn">
              <Link to="/SignIn">
                {" "}
                <button className="loginButton">Login</button>
              </Link>
            </li>
            <li class="btn">
              <Link to="/Home">
                <button className="HomeButton">Home</button>
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
            <div className="card-container">
              <div className="home-column">
                <div className="home-card">
                  <div className="home-title"> {r.recipe.label} </div>
                  <ul>
                    {r.recipe.dietLabels.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                  <div className="card-img">
                    <img src={r.recipe.image}></img>
                  </div>
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
