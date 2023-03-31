import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RecipePage.scss";
import Navbar from "../Navbar/Navbar"
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipePage() {
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
        <>
            <Navbar />
            {/* <div className="recipeCard-section"> */}
              <h2 className="recipeCard-heading">Recipes</h2>

              {/* <div className="recipeCards"> */}
                  <RecipeCard/>
              {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default RecipePage;
