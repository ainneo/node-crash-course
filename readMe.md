### MONGO DB Atlas (tut)[https://www.youtube.com/watch?v=bxsemcrY4gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=10]

- MongoDB Atlas is a cloud-based MongoDB database service for DB
- Mongoose is a ODM Library: Object Doc Mapping
- use Mongoose to connect to the library and create a schema

### File Structure

- Pulic folder: CSS and JavaScript files go in the public folder
- Views folder: HTML files go in the views folder
- Models folder: Mongoose models and schema go in the models folder

### Mongoose Schema

- the schema is the blueprint for the data
- the model is the class that represents the data
- we use mongoose to create a model from the schema in the blog.js file, then we created a new instance of the model in the app.js file, the obj instances is saved to the DB collection, then we can view the data via the path name.
- the path name is linked to the DB collection it is not a path to a view file

#### How we used Mongoose in this tut:

- we learned how to save to the DB, find all, and find by id
- the methods above became avaiable to us when we created a new instance of the model
