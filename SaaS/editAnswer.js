const express = require('express');
const router = express.Router();
const fileController = require('./fileController');
const outputFileName = "question.json";

var questionList = new Array();
var num;

router.get('/:id',(req,res)=>{
  // res.send(req.params);
  num = req.params.id;
  num = num - '0';
    try {
      questionList = fileController.readDataFromFile(outputFileName);
    } catch (ex) {
      console.log(ex);
      //questionList = [];
    }
  question = questionList[num];
  // console.log(question);
    res.render("resultQuestion",{
      question: question.question,
      yes: question.yes,
      no: question.no,
      layout: "main"
    });
})
// router.get('/',(req,res)=>{
//   num = fileController.readDataFromFile("idQuestion.json");
//   // console.log(num);
//   try {
//     questionList = fileController.readDataFromFile(outputFileName);
//   } catch (ex) {
//     console.log(ex);
//     //questionList = [];
//   }
//   var question = questionList[num];
//   res.render("resultQuestion",{
//     question: question.question,
//     yes: question.yes,
//     no: question.no,
//     layout: "main"
//   });
// })
router.post('/',(req,res)=>{
  try {
    questionList = fileController.readDataFromFile(outputFileName);
  } catch (ex) {
    console.log(ex);
    //questionList = [];
  }

  let obj = req.body;
  var t;
  if ( obj.yes ) {
    t = obj.yes - '0';
    questionList[t].yes++;
  }
    else {
      t = obj.no - '0';
      questionList[t].no++;
    }
  fileController.writeDataToFile(outputFileName, questionList);
  fileController.writeDataToFile("idQuestion.json",t);
  redirectString = fileController.readDataFromFile("idQuestion.json");
  redirectString = "/resultQuestion/" + redirectString;
  res.redirect(redirectString);
})
module.exports = router;
