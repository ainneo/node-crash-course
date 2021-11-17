### DOTENV

- NPM DOTENV install & require in the file that you are using it in
- create .env file with default values
- then used procces.env to set the environment variables in the app.js file

### NOTES:

So far we have created template views - home, about, create, details... and we have also created a model off of a schema in our blog.js file. Previously, we took the schema model and created an new instance of it and saved test data to the database. We were able to view the data as json objects in the browser since the data was saved to the database. So at this point, we had the views pages AND the saved data(viewed on the browser).

- app(path, callback), the path can be an exsiting file path or created after the data has been saved.
