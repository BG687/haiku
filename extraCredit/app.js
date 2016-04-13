var fs = require ("fs"),
 	haiku = require('./createHaiku'),
	file = readCmudictFile('../timeMachine.txt'),
	dictionary = require('./dictionary.js'),//
	http = require("http"),
	obj = formatData(file);
	
function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}
function formatData(data){   
	var paras = data.toString().split("\n\n"); 
	var count = 0; 
	var text = {}; 
	paras.forEach(function(el){
		count ++
		if (el){
			if (el[el.length-1] === "."){
				text[count]= el;
			}
		}
	});
	return text;
}

console.log(haiku.createHaiku(obj))
module.exports = function () {
	return haiku.createHaiku(obj)
}