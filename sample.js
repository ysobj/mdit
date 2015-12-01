var kuromoji = require('kuromoji');
console.log(kuromoji);
kuromoji.builder({dicPath: 'node_modules/kuromoji/dist/dict/'}).build(function(err,tokenizer){
  var path = tokenizer.tokenize('東京特許許可局局長許可却下');
  console.log(path);
});
