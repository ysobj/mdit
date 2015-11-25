'use strict';

var remote = require('remote');
var fs = require('fs');
var marked = require('marked');
fs.readFile('./README.md', 'utf-8', function(err,text){
//  document.write(marked(text));
});

function test(){
  alert("Hi!");
}
