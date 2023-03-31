const mongoose = require('mongoose');
require('dotenv').config( {path : "./.env"});

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
let db;

connectToDatabase();
module.exports = db;