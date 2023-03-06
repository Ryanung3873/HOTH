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
            <li>
              <Link to="/Home">
                {" "}
                <button className="signUpButton">Home</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="first-section">
        <div>
          <h1 className="title-home">Food For You</h1>
        </div>
        <div className="test"></div>
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
        <span class="subheading">Features</span>
        <h2 class="heading-secondary">Why you should use us</h2>
      </div>
      <div class="container grid grid--3-cols margin-bottom-md ">
        <div class="card">
          <div class="card-content">
            <div class="card-title">Keep Track!</div>
            <div class="card-caption">
              Track calories, sodium, fat, etc by using ourrecipies and adding
              your own
            </div>
          </div>
          <div class="color-block-1"></div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="card-title">Eat Healthier and more Sustainable!</div>
            <div class="card-caption">
              Learn to eat and cook healthier recipies that aim to reduce your
              carbon footprint and make you feel better
            </div>
          </div>
          <div class="color-block-2"></div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="card-title">Keep Track!</div>
            <div class="card-caption">
              Track calories, sodium, fat, etc by using ourrecipies and adding
              your own
            </div>
          </div>
          <div class="color-block-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
