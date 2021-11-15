### Middleware

- chain of functions, called one after the other with last function sending the response
- middleware functions take in 3 params (request, response, next)
- next is a function that allows the middleware to call the next function in the chain
- there are many middleware packages available like morgan, cors, helmet, compression, body-parser, cookie-parser, etc.

### Acessing CSS and JS files

- you can access the css and js files in the public folder NOT in the views folder
