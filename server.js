const http = require("http");
const fs = require("fs");

//create a server
const server = http.createServer((req, res) => {
  // console.log(req); // prints to terminal all methods/props of the req obj
  // console.log(req.url); // prints / that is our url
  // console.log(req.method); //req.method logs GET method to terminal

  // //The res obj: sends the a response to the browser
  // res.setHeader("Content-Type", "text/html"); // set header content type
  // res.setHeader("X-Foo", "bar");
  // res.write("<p>hello, ninjas</p>"); //writes to the browser
  // res.write("<p>hello again, ninjas</p>"); //writes to the browser again
  // res.end(); //ends the response
  // //Notes: not the best way to display the HTML response to browser
  // //best way is to use a full html file
  // //html file has been created in the views folder

  // // send html file
  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data); //dont always need res.write if there is only a few res, we can directly pass data into end
  //   res.end(data);
  // });

  // basic routing
  // switch statement to route the requests
  // if the switch statment matches the case, then we are going to cancatenate paths
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about"); //redirects to /about
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);//dont always need res.write if there is only a few res, we can directly pass data into end
    res.end(data);
  });
});

// localhost is the default value for 2nd argument
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
