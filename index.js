'use strict';

var remote = require('remote');
var fs = require('fs');
fs.readFile('./package.json', 'utf-8', function(err,text){
  //document.write(text);
});

function test(){
  alert("Hi!");
}
