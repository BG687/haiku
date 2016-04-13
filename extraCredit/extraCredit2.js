var fs = require ("fs"),
 	haiku = require('./createHaiku'),
	file = readCmudictFile('../timeMachine.txt'),
	dictionary = require('./dictionary.js'),//
	http = require("http"),
	parseString = require('xml2js').parseString,
	text = formatData(file),
	skip = ["Project","and", "Gutenberg-tm"],//
	cantEndOn = ["I","was","had","my", "a","of","to", "at","the","with","soon"];

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


haiku.createHaiku(text)
