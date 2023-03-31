const express = require('express');
const axios = require('axios');

require('dotenv').config( {path : "./.env"});

const app = express();
const port = process.env.PORT || 8000;

async function getRecipes() {
    // app.get("/get-recipes", (req, res) => {
    const path = "https://api.edamam.com/api/recipes/v2";

    const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;

    try {
        const response = await axios.get(path + "?app_id=" + APP_ID + "&app_key=" + APP_KEY+ "&type=public&cuisineType=American&mealType=Dinner&diet=high-protein");
        const data = response.data;         // data is in json
        return data;
    } catch (err) {
        console.error("Error found: " , err);
        res.status(500).send("Error fetching data from the API");
    }
}

module.exports = { getRecipes };
// const RecipeService = () => {
//     const path = "https://api.edamam.com/api/recipes/v2";
//     const app_key = "b4855e48bc82953649f39782f5495c5a";
//     const app_id = "6102af6d";

//     function getRecipes(path) {
//         axios.get(path + "?app_id=" + app_id + "&app_key=" + app_key)
//             .then((response) => {
//                 var result = response.data;
//                 console.log(result);
//             }).catch(e => console.log(e));
//     }
// }

// export default RecipeService;