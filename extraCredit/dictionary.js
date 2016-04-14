var fs = require ("fs"),
	cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function createDictionary (data) {   
   var dictionary = {}; 
   var lines = data.toString().split("\n"),
       lineSplit
   	lines.forEach(function(line){ 
	    lineSplit = line.split("  "); 
	    if (lineSplit[1]) {
		    var word = lineSplit[0]; 
		    var phonemes = lineSplit[1]; 
		    var syllableCnt = (lineSplit[1].match(/[0-9]/g) || []).length;	    
	    	dictionary[word] = {syllableCnt: syllableCnt}
	    }
	});   
  	return dictionary;
}

module.exports = createDictionary(cmudictFile);
