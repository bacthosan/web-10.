const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');

const viewRouter = require('./viewRouter');
const questionRouter = require('./questionRouter');
const fileController = require('./fileController');
const editAnswer = require('./editAnswer');
let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended : true } ) );

// app.get('/',(req,res)=>{
//   res.render("question");
// })
app.use('/',questionRouter);
app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname + "/Public/style.css")
})
app.get('/about',(req,res)=>{
  res.render("about");
})
app.use('/ask', viewRouter);
app.use('/question',questionRouter);
app.use('/resultQuestion',editAnswer);
app.listen(6969,(err)=>{
  if ( err ) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})
// app.post('/question',(req,res)=>{
//   console.log(req.body);
//   res.redirect('/');
// })

// app.get('/resultQuestion',(req,res)=>{
//   res.render("resultQuestion");
// })
