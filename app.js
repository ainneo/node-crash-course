const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
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
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //takes all the URI data and parse it into a json object
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path; //???
  next();
});

// home page redirect to blog
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

//about page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
// blog form page
app.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// blog post page
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result, title: "All blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//BLOG FORM SUBMIT - POST
app.post("/blogs", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body); //create a new instance of the blog model

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

//This only works if we click on the blog link on the home/index page
//when clicked it will render the matching id's info to the details page
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id; //this how we access the route params
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//This only works if we click on the delete button on the details page
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id; //this how we access the route params
  //use Blog model and use the method ....
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
