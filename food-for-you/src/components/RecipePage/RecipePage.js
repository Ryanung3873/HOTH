import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecipePage.scss";
import Navbar from "../Navbar/Navbar"
import RecipeCard from "../RecipeCard/RecipeCard";
import SearchBar from "../SearchBar/SearchBar";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';


function RecipePage() {
    const [recipes, setRecipes] = useState([]);
    const [nextPaginationLink, setNextPaginationLink] = useState('');
    const [recipesCount, setRecipesCount] = useState();
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();

    // const [prevPaginationLink, setPrevPaginationLink] = useState('');
    
    // var nextPaginationLink = '';

    const buttonSx = {
      ...{
        // bgcolor: green[500],
        '&:hover': {
          // bgcolor: green[700],
        },
      },
    };

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

          setRecipesCount(data.count);
          // console.log("Recipes count ", data.count);
          // setPrevPaginationLink('http://localhost:8000/api/recipes');   // for first pagination
          setNextPaginationLink(data._links.next.href);
          // console.log(data);
          setRecipes(data.hits);
        } catch (err) {
          console.log(err);
        }
      }

      // async function getNextPagination() {
      //   const response = await axios.get(nextPaginationLink);

      //   const data = response.data;
      //   console.log(data);

      //   setRecipes(data.hits);    // set the results as recipes

      //   console.log(prevPaginationLink);
      //   if(prevPaginationLink === 'http://localhost:8000/api/recipes' && data.from !== 1) {
      //     // currently in 1st or 2nd page
      //     // don't need to do anything
          
      //     setPrevPaginationLink(nextPaginationLink);
      //   } else if(data.from === 21) {
      //     setPrevPaginationLink('http://localhost:8000/api/recipes');
      //   } else {
      //     setPrevPaginationLink(nextPaginationLink);
      //   }
      //   setNextPaginationLink(data._links.next.href);
      //   // setPrevPaginationLink(nextPaginationLink);
      //   // console.log("setting prev link");
      //   // setNextPaginationLink(data._links.next.href);


      //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      // }

      // async function getPrevPagination() {
      //   const response = await axios.get(prevPaginationLink);

      //   const data = response.data;
      //   console.log(data);

      //   setRecipes(data.hits);    // set the results as recipes
        
      //   setPrevPaginationLink(nextPaginationLink);
      //   // if(prevPaginationLink === 'http://localhost:8000/api/recipes' && data.from !== 1) {
      //   //   // currently in 1st or 2nd page
      //   //   // don't need to do anything
          
      //   //   setPrevPaginationLink(nextPaginationLink);
      //   // } else if(data.from === 21) {
      //   //   setPrevPaginationLink('http://localhost:8000/api/recipes');
      //   // }

      //   setNextPaginationLink(data._links.next.href);


      //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      // }

      async function showMoreRecipes() {
        const response = await axios.get(nextPaginationLink);

        const data = response.data;
        // console.log("Data:", data);

        setRecipesCount(data.count);

        const allRecipes = [...recipes, ...data.hits];

        if(!loading) {
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setLoading(false);
            setRecipes(allRecipes);    // set the results as recipes
            setNextPaginationLink(data._links.next.href);
          }, 500);
        };

      }


      // gets search term passed in from search bar component as prop
      // then we call the api with the search term as a query
      const handleSearch = async (searchTerm) => {
        // call search function using the search term
        const response = await axios.get('http://localhost:8000/api/recipes?' + searchTerm);
        const data = response.data;

        setRecipesCount(data.count);
        // setPrevPaginationLink('http://localhost:8000/api/recipes?' + searchTerm);
        setNextPaginationLink(data._links.next.href);
        console.log("Setting recipes");
        setRecipes(data.hits);    // set the results as recipes
      }
      
    return (
        <>
            <Navbar />
            {/* <div className="recipeCard-section"> */}
              <h2 className="recipeCard-heading">Recipes</h2>
              <SearchBar onSearch={handleSearch}/>
              <RecipeCard recipes={recipes} recipesCount={recipesCount}/>
              <Box sx={{ m: 1, position: 'relative'}}>
                <div
                  className="see-more-button">
                  <Button 
                    variant="outlined" 
                    sx={buttonSx}
                    onClick={showMoreRecipes}
                    disabled={loading}
                  >
                    Show More
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: blue[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                </div>
              </Box>
              {/* <div className="pagination-buttons">
                <div className="page-button">
                  <Button variant="contained" onClick={getPrevPagination}>Previous</Button> 
                </div>
                <div className="page-button">
                  <Button variant="contained" onClick={getNextPagination}>Next</Button> 
                </div>
              </div> */}
        </>
    )
}

export default RecipePage;
