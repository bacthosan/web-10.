const fileController = require('./fileController');
const outputFileName = "question.json";
const questionModel = require("../questionModel");
const getQuestionList = () => {
  let questionList = fileController.readDataFromFile(outputFileName);
}

const saveQuestionList = (questionList) => {
  fileController.writeDataToFile(outputFileName,questionList);
}
const getQuestionById = (id) => {
  let questionList = getQuestionList();
  return questionList[id];
}
const getRandomQuestion = () => {
  let questionList = getQuestionList();
  let randomId = Math.floor(Math.random() * (questionList.length-1) );

  return randomId;
}
const updateQuestion = (id, answer) => {
  let questionList = getQuestionList();

  if ( answer === "yes" ) {
    questionList[id].yes++;
  }
    else if ( answer === "no" ) {
      questionList[id].no++;
    }
}

// const addNewQuestion = (question) => {
//   let newQuestion = {
//     question,
//     yes,
//     no
//   }
//   let questionList = getQuestionList();
//   questionList.push(newQuestion);
//   saveQuestionList(questionList);
// }
module.exports = {
  getQuestionById,
  updateQuestion,
  getRandomQuestion,
  saveQuestionList,
  getQuestionList
}
