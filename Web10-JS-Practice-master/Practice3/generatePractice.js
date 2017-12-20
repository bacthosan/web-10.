'use strict'
var fs = require("fs");

const leftBound = -1000;
const rightBound = 1000;

function random(minn, maxx ) {
    return Math.round(Math.random() * ( maxx - minn ) + minn );
}
function normal()
{
  var obj = {
    "input" : [],
    "target" : 0,
    "output" : 0
  }
  var n = random(0,100);
  for( var i = 0; i < n; i++ )
    obj.input.push(random(leftBound,rightBound) );
  obj.target = obj.input[random(0,n)];
  obj.output = obj.input.indexOf(obj.target);
  return obj;
}
function generate(numberOfTestcases, filePath = "./test-data.json"){
  var testCases = [];
  var lengthCases = 0;
  if ( numberOfTestcases < 5 ) {
    for( var i = 0; i < numberOfTestcases; i++)
      testCases.push(normal() );
  } else {
    var obj = normal();
    obj.input = []; obj.output = -1;
    testCases.push(obj); // zeroLength
    obj = normal(); obj.target = rightBound + 1; obj.output = -1;
    testCases.push(obj); // notFound
    obj = normal(); obj.output = 0; obj.target = obj.input[0];
    testCases.push(obj); // firstIndex
    obj = normal(); var li = obj.input.length - 1;obj.input[li] = rightBound + 1;
    obj.target = obj.input[li]; obj.output = li;
    testCases.push(obj); // lastIndex
    obj = normal(); var mi = Math.floor(obj.input.length/2); obj.input[mi] = rightBound + 1;
    obj.target = obj.input[mi]; obj.output = mi;
    testCases.push(obj); // middleIndex
    for ( var i = 0; i < numberOfTestcases - 5; i++)
      testCases.push(normal() );
  }
  fs.writeFile(filePath, JSON.stringify(testCases), function(err) {
    if ( err) {
      return console.error(err);
    }
  });
  return testCases;
}
module.exports = generate
