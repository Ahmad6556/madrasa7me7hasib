const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const articleSchema = new Schema({
  //day 1
  d1H1: String,
  d1H2: String,
  d1H3: String,
  d1H4: String,
  d1H5: String,
  d1H6: String, 
  d1H7: String,
  //day 2
  d2H1: String,
  d2H2: String,
  d2H3: String,
  d2H4: String,
  d2H5: String,
  d2H6: String, 
  d2H7: String,
  //day 3
  d3H1: String,
  d3H2: String,
  d3H3: String,
  d3H4: String,
  d3H5: String,
  d3H6: String, 
  d3H7: String,
  //day 4
  d4H1: String,
  d4H2: String,
  d4H3: String,
  d4H4: String,
  d4H5: String,
  d4H6: String, 
  d4H7: String,
  //day 5
  d5H1: String,
  d5H2: String,
  d5H3: String,
  d5H4: String,
  d5H5: String,
  d5H6: String, 
  d5H7: String,
});

// Create a model based on that schema
const Article = mongoose.model("jadual", articleSchema);

// export the model
module.exports = Article; 