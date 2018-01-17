const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');
const registerRouter = require('./router/registerRouter');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendfile('./public/index.html');
    res.sendfile('./public/')
});

app.get('/style.css', (req, res) => {
    res.sendfile('./public/style.css')
});

app.use('/submit', registerRouter);

mongoose.connect(
  config.connectionString,
  {
    useMongoClient: true
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connect success!");
    }
  }
);

app.listen(config.port, (err) => {
  if (err) { console.log(err); };
  console.log(`App is listening at port ${config.port}`);
});