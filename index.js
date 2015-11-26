'use strict';

var remote = require('remote');
var fs = require('fs');
var marked = require('marked');
var x = document.querySelector(".editor");
var y = document.querySelector(".preview");
var z = document.querySelector("textarea");
fs.readFile('./README.md', 'utf-8', function(err,text){
//  document.write(marked(text));
  z.value = text;
  y.innerHTML = marked(text);
});
x.addEventListener('click',function(){
  console.log('x');
  x.style.display="none";
  y.style.display="block";
});
y.addEventListener('click',function(){
  console.log('x');
  y.style.display="none";
  x.style.display="block";
});
