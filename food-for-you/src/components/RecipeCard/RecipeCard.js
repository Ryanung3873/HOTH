import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'
import "./RecipeCard.scss"

function RecipeCard() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
      try {
        getRecipes();
      } catch(err) {
        console.log("Error: ", err)
      }
    }, []);
    
      async function getRecipes() {

        try {
          const response = await axios.get('http://localhost:8000/api/recipes');
          const data = response.data;
          console.log(data.hits);
          setRecipes(data.hits);
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <>
            <div className="recipe-card-section">
                <div className="recipe-cards-container">
                    {recipes.map((recipes) => (
                    <Card key={recipes.recipe.image} className="recipe-cards" sx={{ maxWidth: 350 }}>
                        <CardMedia 
                            component="img"
                            height="220"
                            image={recipes.recipe.image}
                            alt={recipes.recipe.label}
                        />
                        <CardContent>
                            <Typography component="div" className="recipe-card-heading" variant="h6">
                                {recipes.recipe.label}
                            </Typography>
                            <Typography component="div" className="subheading" variant="subheading">
                                Cuisine: {recipes.recipe.cuisineType}
                            </Typography>
                            <Typography component="div" className="subheading" variant="body1">
                              Calories: {recipes.recipe.calories.toFixed(2)}
                            </Typography>
                            <Typography component="div" className="recipe-source" variant="body2">
                              {recipes.recipe.source}
                            </Typography>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecipeCard;
