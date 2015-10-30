define([
    "dojo/query"
    ], function(query){
      query("input[type='button']").on("click",function(e){
        alert("clicked!");
      });
    });
