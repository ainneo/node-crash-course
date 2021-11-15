const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000);

//app.get(path, callback) //http GET request
//send back a response, use sendFile()
//path is an aboslute path, we need to add an option obj for a relative path
//relative path is relative to the current working directory {root: 'public'}
app.get("/", (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile("./views/about.html", { root: __dirname });
});

// MUST BE TOWARDS THE END
// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// MUST ALWAYS BE AT THE END
// 404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
