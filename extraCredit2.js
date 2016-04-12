var fs = require ("fs"),
 	haiku = require('./haiku_generator'),
	file = readCmudictFile('./timeMachine.txt'),
	dictionary = {},
	http = require("http"),
	parseString = require('xml2js').parseString;
	text = formatData(file); 

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

function getRandomParagraph () {
	var randomIndex = getRandom (Object.keys(text));
	var randomPar = text[randomIndex].split(" ");
	return randomPar
}

function createHaiku (obj) {
	var order = [5,7,5]; 
	var par;
	for (i in order){
		par = getRandomParagraph (obj); 
		console.log(writeLine(par, order[i], 0))
	}
}

function writeLine (par, length, start) {
	if (length === 0) {
		return ""
	}
	var word = par[start];
	var sylNum = getSyllables(word)
	//console.log(word);
	return word+" "+writeLine(par, length-sylNum, start+1)
}

////create a rule for dipthongs client, riot, quiet, facial,
function getSyllables (word) {
	//get all vowels that aren't the last letter and aren't next to another vowel
	var syllables = []; 
	var holder = "";
	for (var i = 0; i <word.length; i++){
		holder+=word[i]
		//your, he, quiet, boy, lynx, happy, preserve, resevior 
		var isVowel = word[i].match(/[a,e,i,o,u,y]/g);
		if (isVowel){
			//if it's not the last one
			if (word[i+1]){
				//if the next one isn't a vowel
				if (!word[i+1].match(/[a,e,i,o,u,y]/g)){ 
					syllables.push(holder+"-")
					holder = "";
				}
			}
			else {
			//feet
				if (isVowel[0] !== "e") {
					syllables.push(holder+"-")
					holder = "";
				}
			}
			
		}
		
	}
	//the, he
	if (syllables.length === 0){
		syllables.push(holder)
	}
	return syllables.length

}

function getRandom (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

createHaiku (text)
