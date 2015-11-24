'use strict';

var remote = require('remote');
var fs = require('fs');
var marked = require('marked');
var x =require('highlight');
console.log("check", x);
//marked.setOptions({
//  highlight: function (code) {
//               return require('highlightjs').highlightAuto(code).value;
//             }
//});
fs.readFile('./README.md', 'utf-8', function(err,text){
  document.write(marked(text));
});

function test(){
  alert("Hi!");
}
