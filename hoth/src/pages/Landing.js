import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Home() {
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
            <li>
              <Link to="/SignIn">
                {" "}
                <button className="loginButton">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="first-section">
        <div>
          <h1 className="title-home">Food For You</h1>
        </div>
        <div className="description">
          <h2 className="h2-description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </h2>
        </div>
      </div>

      <div class="cards-heading">
        <span class="subheading">Meals</span>
        <h2 class="heading-secondary">Recipies and shit</h2>
      </div>
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
      </div>
    </div>
  );
}

export default Home;
