We do not need to do this, but it is good practice to make cleaner and modular code

### MVC Basics - Model, View, Controller

- MVC is a way of structuring our code and files
- Keeps code in modular, resusable & easier to read
- mode => controller => view
- Here we sperated/created a routes and controllers folder to make code cleaner and neater

### Reacap:

Extracted routes from app.js and used express.Router() to create routes in a new file. Replaced app with router, and further broke it down, by creating seperate functions on another page and importing them to use in the routers functions.

- app.js => routers.js => blogControllers.js
