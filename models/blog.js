const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//mongoose creating a schema
//schema is the thing that defines the structure of the data
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //automatically creates a time stamp for each blog post
);

//creating a model of our blogSchema
//the model wrapps schema and gives it a name, an interface to communicate with the database collection
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog; //export so we can use it elsewhere - needs to be imported where it is going to be used
