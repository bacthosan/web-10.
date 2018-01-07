const express = require('express');
const router = express.Router();
const fileController = require('./fileController');
const outputFileName = "question.json";

var questionList = new Array();
var num;
router.get('/',(req,res)=>{
  try {
    questionList = fileController.readDataFromFile(outputFileName);
  } catch (ex) {
    console.log(ex);
    //questionList = [];
  }
  num = Math.floor(Math.random() * questionList.length);
  var question = questionList[num];
  res.render("question",{
    question: question.question,
    yes: question.yes,
    no: question.no,
    id: question.id,
    // layout: "main"
  });
})

router.post('/',(req,res)=>{
  try {
    questionList = fileController.readDataFromFile(outputFileName);
  } catch (ex) {
    console.log(ex);
    //questionList = [];
  }
  // console.log(req.body);
  let s = JSON.stringify(req.body);
  var newQuestion = {
    question: s,
    yes: 0,
    no: 0,
    id: questionList.length
  }
  questionList.push(newQuestion);
  fileController.writeDataToFile(outputFileName, questionList);
  fileController.writeDataToFile("idQuestion.json", questionList.length-1);
  redirectString = fileController.readDataFromFile("idQuestion.json");
  redirectString = "/resultQuestion/" + redirectString;
  res.redirect(redirectString);
  // res.redirect("/resultQuestion");
})

module.exports = router;
