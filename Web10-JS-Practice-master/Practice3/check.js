
function random(minn, maxx ) {
    return Math.round(Math.random() * ( maxx - minn ) + minn );
}
const leftBound = -1000;
const rightBound = 1000;
function normal()
{
  var obj = {
    "input" : [],
    "target" : 0,
    "output" : 0
  }
  var n = random(0,1000);
  for( var i = 0; i < n; i++ )
    obj.input.push(random(leftBound,rightBound) );
  obj.target = obj.input[random(0,n)];
  obj.output = obj.input.indexOf(obj.target);
  return obj;
}
var lonto =  normal();
var fs = require("fs");
fs.writeFile("test-data.json", JSON.stringify(lonto), function(err) {
  if ( err) {
    return console.error(err);
  }
});
