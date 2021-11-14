#### Req & Res Objs (tut)["https://www.youtube.com/watch?v=DQD00NAUPNk&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4"]

- Req to server, on the backend
- Res to browser, can view in newtworks/response tab

#### Write HTML directly to the browser

- 1. res.write("<p>hello, ninjas</p>")
- 2. res.end(); //ends the response => must have an end
- this is not the best way to display HTML to browser

#### Send HTML file

- fs.readFile("./views/index.html", callback) //to send an html file
- in the callback `(err, data) => { if (err) { console.log(err); res.end(); } //res.write(data); //don't always need res.write if only a few res, we can directly pass data into res.end() res.end(data); });`

#### Basic Routing

- switch statment
- after switch we need to send HTML, by fs.readFile() and passing in the switch variable
- ``// send html
  fs.readFile(path, (err, data) => {
  if (err) {
  console.log(err);
  res.end();
  }
  //res.write(data);
  res.end(data);
  });```

### Recap on routing pages

- require http and file system modules
- create a server from http module
- inside server function create a switch statement & routes
- then send the html using fs module, 1. writes/ 2. ends response

#### Status Codes:

- 200 OK
- 301 Resource removed
- 404 Not found
- 500 Internal server error
