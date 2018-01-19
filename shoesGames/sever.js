var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/productModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 
// mongoose.connect("mongodb://localhost:27017/register");
mongoose.connect(
    "mongodb://localhost:27017/ProductDB",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database connect success!");
      }
    }
  );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('assets'));

var routes = require('./api/routes/productRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
