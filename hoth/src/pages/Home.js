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
  console.log("outside", recipes)
  useEffect(() => {
    getSomething();
  }, [])

  function getSomething() {
    axios.get(path + "?app_id=" + app_id + "&app_key=" + app_key + "&type=public&diet=high-protein")
    .then((response) => {
      setRecipes(response.data.hits);
      console.log(response.data.hits);

    }).catch(e => console.log(e));
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



      <div className="cards-heading">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">Recipes</h2>
      </div>
      {recipes.map(r => 
         <div className="card-container">
          <div class="column">
            <div className="card">
              {r.recipe.label}
            </div>
          </div>
          <div className="column">
            <div className="card">
              {r.recipe.label}
            </div>
          </div>
          <div className="column">
            <div className="card">
              {r.recipe.label}
            </div>
          </div>
        </div>
      )}
      {/*
      <div class="container grid grid--3-cols margin-bottom-md ">
        <div class="meal">
          <div class="meal-content">
            <div class="meal-tags">
              <span class="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p class="meal-title">Japanese Gyozas</p>
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li class="meal-attribute">
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li class="meal-attribute">
                <span>
                  {" "}
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="meal">
          <div class="meal-content">
            <div class="meal-tags">
              <span class="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p class="meal-title">Japanese Gyozas</p>
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li class="meal-attribute">
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li class="meal-attribute">
                <span>
                  {" "}
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="meal">
          <div class="meal-content">
            <div class="meal-tags">
              <span class="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p class="meal-title">Japanese Gyozas</p>
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li class="meal-attribute">
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li class="meal-attribute">
                <span>
                  {" "}
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
  </div>*/}
  <p>d</p>
    </div>
  );
}

export default Home;
