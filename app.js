const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
  "mongodb+srv://{user}:{password}@cluster0.823u4.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "HEYYYYY blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("5ea99b49b8531f40c0fde689")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

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

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// DO NOT USE: NEED TO FIX
// const express = require("express");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const Blog = require("./models/blog");

// // express app
// const app = express();

// // connect to mongodb & listen for requests
// const dbURI =
//   "mongodb+srv://ainneo:31542069Mdb@cluster0.823u4.mongodb.net/node-tuts?retryWrites=true&w=majority";

// //mongoose.connect() is a way to connect to the MongoDB database
// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => app.listen(3000)) //only listen for requests
//   .catch((err) => console.log(err));

// // register view engine
// app.set("view engine", "ejs");

// // middleware & static files
// app.use(express.static("public"));
// app.use(morgan("dev")); //npm test
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// //DATABASE VIEWS
// // mongoose & mongo tests
// // take Blog object props and save to blog collection on database
// // path displays json on the browser - does not exsit as a view file
// // we have saved the data to the database, so it does not exsit as a view file
// app.get("/add-blog", (req, res) => {
//   //created a new instance of the blog model
//   //which is available to see via the pathname in the param
//   const blog = new Blog({
//     title: "hello new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });
//   //new instances get access to many methods like save()
//   blog
//     .save() //saves blog to the database
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     }); //return the results or log the error
// });

// //find add blogs
// app.get("/all-blogs", (req, res) => {
//   Blog.find() //append Blog model to the find(), this gives all the blogs documents
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// //find blogs by id
// app.get("/single-blog", (req, res) => {
//   Blog.findById("5ea99b49b8531f40c0fde689")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// //PAGE VIEWS
// //home page
// app.get("/", (req, res) => {
//   res.redirect("/blogs");
// });

// //about page
// app.get("/about", (req, res) => {
//   res.render("about", { title: "About" });
// });

// // create blog page
// app.get("/blogs/create", (req, res) => {
//   res.render("create", { title: "Create a new blog" });
// });

// // blog page
// //{ blogs: result, title: "All blogs" }
// // title will appear on the head
// // blogs results are mapped to the blogs on the index page
// app.get("/blogs", (req, res) => {
//   Blog.find()
//     .sort({ createdAt: -1 }) //we can sort by mongoose timestamps
//     .then((result) => {
//       res.render("index", { blogs: result, title: "All blogs" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // 404 page
// app.use((req, res) => {
//   res.status(404).render("404", { title: "404" });
// });
