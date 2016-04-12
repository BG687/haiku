var fs = require ("fs"),
 	haiku = require('./haiku_generator'),
	createHaiku = haiku.createHaiku
// console.log(createHaiku());
	cmudictFile = readCmudictFile('./cmudict.txt');
	wordObj = formatData(cmudictFile); 

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}
function formatData(data){   
   var words = {}; 
   var lines = data.toString().split("\n"),
       lineSplit
   	lines.forEach(function(line){ 
	    lineSplit = line.split("  "); 
	    if (lineSplit[1]) {
		    var word = lineSplit[0]; 
		    var phonemes = lineSplit[1]; 
		    var syllableCnt = (lineSplit[1].match(/[0-9]/g) || []).length;	    
	    	if (!words[syllableCnt]){
	    		words[syllableCnt] = []; 
	    	}
	    	words[syllableCnt].push(lineSplit[0])
	    }
	   	//console.log("The word " + lineSplit[0] + " phoneme layout: " + lineSplit[1], syllableCnt);  
  	});   
  	return words;
}

createHaiku([5,7,5], wordObj);




// console.log(haiku.createHaiku)