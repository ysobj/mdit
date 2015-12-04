'use strict';

var remote = require('remote');
var fs = require('fs');
var marked = require('marked');
var editor = document.querySelector(".editor");
var preview = document.querySelector(".preview");
var textarea = document.querySelector("textarea");
var currentFile = document.querySelector(".currentFile");
var saveButton = document.querySelector("button");
saveButton.addEventListener('click',function(e){
  fs.writeFile(currentFile.innerText, textarea.value);
});
var readFile = function(path){
  fs.readFile(path, 'utf-8', function(err,text){
    textarea.value = text;
    preview.innerHTML = marked(text);
    editor.style.display="none";
    preview.style.display="block";
    currentFile.innerText = path;
  });
};
readFile('./README.md');
fs.readdir('.',function(err,files){
  var li = '';
  files.forEach(function(file){
    if(file.charAt(0) !== '.'){
      var fsStat = fs.statSync(file);
      if(fsStat.isFile()){
        li += '<li class=\'filelist\'>' + file + '</li>';
      }
    }
  });
  var t = document.querySelector('.fileList');
  t.innerHTML = li;
  t.addEventListener('click',function(e){
    readFile(e.target.innerText);
  });
});
document.querySelector(".previewTab").addEventListener('click',function(){
  editor.style.display="none";
  preview.style.display="block";
  preview.innerHTML = marked(textarea.value);
});
document.querySelector(".editorTab").addEventListener('click',function(){
  preview.style.display="none";
  editor.style.display="block";
});
