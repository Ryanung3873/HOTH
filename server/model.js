const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  // Define your data schema here
  name: {
    type: String,
    required: false
  }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
