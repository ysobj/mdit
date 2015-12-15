'use strict';

var remote = require('remote');
var fs = require('fs');
var marked = require('marked');
var editor = document.querySelector(".editor");
var preview = document.querySelector(".preview");
var textarea = document.querySelector("textarea");
var saveButton = document.querySelector("button");
var editorTab = document.querySelector(".editorTab");
var previewTab = document.querySelector(".previewTab");

var currentFile = '';

//saveButton.addEventListener('click',function(e){
//  fs.writeFile(currentFile, textarea.value);
//});
var readFile = function(path){
  fs.readFile(path, 'utf-8', function(err,text){
    textarea.value = text;
    preview.innerHTML = marked(text);
    editor.style.display="none";
    preview.style.display="block";
    currentFile = path;
  });
};
readFile('./README.md');
fs.readdir('.',function(err,files){
  var li = '<ul class="list-group"> <li class="list-group-header"> <input class="form-control" type="text" placeholder="Search for someone"> </li>';
  files.forEach(function(file){
    if(file.charAt(0) !== '.'){
      var fsStat = fs.statSync(file);
      if(fsStat.isFile()){
        li += '<li class="list-group-item"> <img class="img-circle media-object pull-left" src="/assets/img/avatar.jpg" width="32" height="32"> <div class="media-body"> <strong>' + file + '</strong> <p>Lorem ipsum dolor sit amet.</p> </div> </li>';
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
  
  editorTab.className = 'tab-item editorTab';
  previewTab.className = 'tab-item previewTab active';
});
document.querySelector(".editorTab").addEventListener('click',function(){
  preview.style.display="none";
  editor.style.display="block";
  editorTab.className = 'tab-item editorTab active';
  previewTab.className = 'tab-item previewTab';
});
