const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const env = require("dotenv").config();

// express app
const app = express();

// connect to mongodb & listen for requests
// const dbURI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.823u4.mongodb.net/node-tuts?retryWrites=true&w=majority`;

mongoose
  .connect(process.env.MOOGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((_) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //required when submitting a form with post method ( default content-type = application/ x-www-form-urlencoded ) and you need to acess that form data using req.body , if you don't use it req.body would be undefined.
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes); //path, callback

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
//It is mostly used to set up middleware for your application.
//the path: It is the path for which the middleware function is being called.
//It can be a string representing a path or path pattern or regular expression pattern to match the paths.
//the callback: It is a middleware function or a series/array of middleware functions.
