import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./RecipeCard.scss"

// recipes is a prop passed in from RecipePage.js
// recipesCount is a prop passed in from RecipePage.js
function RecipeCard({ recipes, recipesCount }) {
    const [sortType, setSortType] = useState("");
    const [sortedRecipes, setSortedRecipes] = useState(recipes);

    useEffect(() => {
      setSortedRecipes(recipes)
    }, [recipes]);

    var editedLabels = [];    // store edited labels

    function editLabels() {
      var originalLabels = [];   // store unedited labels
      recipes.forEach((recipes) => {
        originalLabels.push(recipes.recipe.label);
      });
  
      originalLabels.forEach((recipeLabel) => {
        let editedRecipeLabel = '';
        editedRecipeLabel = recipeLabel.toLowerCase();
        if(editedRecipeLabel.includes(" ")) {
          editedRecipeLabel = editedRecipeLabel.replaceAll(" ", "-");
        }
        
        editedLabels.push(editedRecipeLabel);
      }); 
    }

    editLabels();


    const handleSelectOptionsChange = (event) => {
      const selectedSortType = event.target.value;
      
      console.log(selectedSortType);

      if(selectedSortType === "ascending") {
        let recipesToSort = recipes;
        let sortedCalories = recipesToSort.sort(
          (caloriesOne, caloriesTwo) => (caloriesOne.recipe.calories > caloriesTwo.recipe.calories) ? 1 : (caloriesOne.recipe.calories < caloriesTwo.recipe.calories ? -1 : 0)
          );
          
          setSortedRecipes(sortedCalories);
          console.log("sorted ascending")
        } else if(selectedSortType === "descending") {
          let recipesToSort = recipes;

          let sortedCalories = recipesToSort.sort(
            (caloriesOne, caloriesTwo) => (caloriesOne.recipe.calories < caloriesTwo.recipe.calories) ? 1 : (caloriesOne.recipe.calories > caloriesTwo.recipe.calories ? -1 : 0)
            );
            
            setSortedRecipes(sortedCalories);
            console.log("sorted descending");
          } 
          
          setSortType(selectedSortType);
    };

    return (
        <>
          <div className="sorting-list-form">
            <FormControl className="sorting-list" component="div">
              <InputLabel id="simple-select-label">Sort</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                value={sortType}
                label="sort"
                onChange={handleSelectOptionsChange}
              >
                {/* <MenuItem value="default"></MenuItem> */}
                <MenuItem value="ascending">Ascending - Calories</MenuItem>
                <MenuItem value="descending">Descending - Calories</MenuItem>
              </Select>
            </FormControl>  
          </div>
          <div className="recipe-card-section">
            <Typography className="results-count" component="div" variant="body2">
              Number of Results: {recipes.length} of {recipesCount} recipes
            </Typography>
              <div className="recipe-cards-container">
                  {sortedRecipes.map((recipes, index) => (
                    <Card key={recipes.recipe.image} className="recipe-cards" sx={{ maxWidth: 400 }}>
                        <CardMedia 
                            component="img"
                            height="220"
                            image={recipes.recipe.image}
                            alt={recipes.recipe.label}
                        />
                        <CardContent>
                            <Typography component="div" className="recipe-card-heading" variant="h6">
                                <a className="recipe-card-heading-link" target="_blank" rel="noreferrer" href={recipes.recipe.url}>{recipes.recipe.label}</a>
                            </Typography>
                            <Typography component="div" className="subheading" variant="subheading">
                                Cuisine: {recipes.recipe.cuisineType}
                            </Typography>
                            <Typography component="div" className="subheading" variant="body1">
                              Calories: {recipes.recipe.calories.toFixed(2)} cal
                            </Typography>
                            <Typography component="div" className="recipe-source" variant="body2">
                              Source: {recipes.recipe.source != null ? recipes.recipe.source : "Unknown source"}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <Button component={Link} target="_blank" to={`/recipes/${editedLabels[index]}`} className="learn-more-button" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                  ))}
              </div>
            </div>
        </>
    )
}

export default RecipeCard;
