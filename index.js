'use strict';

var remote = require('remote');
var fs = require('fs');
var marked = require('marked');
var editor = document.querySelector(".editor");
var preview = document.querySelector(".preview");
fs.readFile('./README.md', 'utf-8', function(err,text){
//  document.write(marked(text));
  document.querySelector("textarea").value = text;
  preview.innerHTML = marked(text);
  editor.style.display="none";
});
fs.readdir('.',function(err,files){
  console.log(files);
  var li = '';
  files.forEach(function(file){
    if(file.charAt(0) !== '.'){
      var fsStat = fs.statSync(file);
      if(fsStat.isFile()){
        li += '<li>' + file + '</li>';
      }
    }
  });
  var t = document.querySelector('.fileList');
  t.innerHTML = li;
});
document.querySelector(".previewTab").addEventListener('click',function(){
  editor.style.display="none";
  preview.style.display="block";
});
document.querySelector(".editorTab").addEventListener('click',function(){
  preview.style.display="none";
  editor.style.display="block";
});
