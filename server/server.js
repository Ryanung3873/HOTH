const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./model');
const { response } = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const RecipeService = require("./services/RecipeService")

require('dotenv').config( {path : "./.env"});


const app = express();
const port = process.env.PORT || 8000;

const recipeService = require("./services/RecipeService");

app.use(cors());
app.use(bodyParser.json());

app.get('/api/recipes?:recipe', async (req, res) => {
  let originalUrl = req.originalUrl;    // get original url from request
  let recipeQuery = originalUrl.substring(originalUrl.indexOf('?') + 1);    // find query from substring
  if(recipeQuery === "/api/recipes" || recipeQuery === "") {    // if no query exists
    recipeQuery = "snack";                     // set recipeQuery to null --> no search, set default search (snack)
  }
  console.log(recipeQuery);
  try {
    const data = await recipeService.getRecipes(recipeQuery);
    res.send(data);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send('Error fetching data from API');
  }
});

router.get('/login', (req, res) => {
    res.sendFile(__dirname + "/src/components/LoginPage/LoginPage.js");
})

router.post('/login', (req, res) => {
    // handle login form submission
});

router.get('/view-recipes', (req, res) => {
    res.sendFile(__dirname + "/src/components/RecipePage/RecipePage.js");
});

app.get('/collections', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch(err) {
        console.log("Error when retrieving data from collection.", err);
    }
});

app.get('/collections/new', async(req, res) => {
    const data = new Data({
        name: "hello help me"
    });

    data.save();
    res.json(data);
})

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to MongoDB Atlas");
  }).catch((err) => {
    console.log("Error connecting to MongoDB Atlas.", err);
  });
  
}
// let db;

connectToDatabase();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = router;

