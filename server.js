const http = require("http");

// this method creates a server
const server = http.createServer((req, res) => {
  console.log("request made"); //logs in terminal, not browser, it's not on frontend it's on server which is the backend
});

// localhost is the default value for 2nd argument
// this method starts the server and listens for requests
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

//Notes:
//Lochost is like a domain name on the web.
//it is a loopback to our own computer
//localhost  listens for request coming in our computer
//Port numbers are a gateway/port on our computer that a bit of software can comunicat with.
