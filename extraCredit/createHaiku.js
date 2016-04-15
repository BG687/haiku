var skip = ["gutenberg", "gutenbergtm", "ebooks"],
	cantEndOn = ["i", 
"'that's", "in", "an", "and", "but","was","my", "a","of","to", "at","the","with","soon"];
	dictionary = require('./dictionary.js'),
	pos = require('pos'),
	tagger = new pos.Tagger();

function createHaiku (obj) {
	var poem = "";
	var order = [5,7,5]; 
	var par;
	var line;
	
	for (i in order){
		line = approveLine(obj, order[i]);
		poem+=line+"\n"
	}
	return poem;
}

function approveLine (obj, num) {
	var par = getRandomParagraph (obj);
	var line = capatalize(writeLine(par, num, 0))
	if (isBookText(line)) {
		return line	
	}
	else {
		return checkLine(obj)
	}
}

function getRandomParagraph (text) {
	var randomIndex = getRandom (Object.keys(text));
	var randomPar = text[randomIndex].split(" ");
	//get rid of quotes at beggining of paragraph
	randomPar[0]=randomPar[0].replace(/'/g,"")
	//pick another if that 
	var firstChar = randomPar[0].split("")[0];
	if (!isNaN(firstChar)) {
		return getRandomParagraph(text);
	}
	else {
		return randomPar
	}
}

function writeLine (par, length, start) { 
	var sylCount = 0; 
	var string = ""
	//start at the beggining 
	//go through each word, increasing the num of syllabs, 
	//if it is greater then the length, start over at +start
	//if it's equal remove that line from the object(global) and return that line
	//add some end checks 
	//par.length
	for (var i = start; i <par.length; i++){
		//getting new paragraph maybe better to write a seperate function for within the for loop 
		var word = formatWord(par[i]);
		var syllables = getDictSyllables(word);

		if (!syllables) {
			syllables = countSyllables (word)
		}

		sylCount+=syllables;
		string+=" "+word;

		if (sylCount === length) {
			if (cantEndOn.indexOf(word) >= 0) {
				// console.log("can't endon")
				return writeLine (par, length, start+1)
				//console.log("nope", word, length)
			}
			break;
		}
		else if (sylCount > length) {
			// console.log("redo")
			return writeLine (par, length, start+1)
		}
		
	}
	
	return string
}

function isBookText (string) {
	var acceptable = true;
	var arr = string.split(" ");
	// console.log(skip.indexOf(string));
	arr.forEach (function (el, i){
		if (skip.indexOf(el) >= 0) {	
			acceptable = false;
		}
		if (!isNaN(el[0])){
			acceptable = false; 
		}
	});

	return acceptable;
}

function formatWord (word) {
	word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g,"").replace(/\s{2,}/g,"");
		// searchWord = searchWord.toUpperCase();
	return word
}

function getDictSyllables (word) {
	word = word.toUpperCase();
	if (dictionary[word]){
		var syllables = dictionary[word].syllableCnt;
		return syllables
	}
	else {
		return false
	}
}

function countSyllables (word) {
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
function capatalize (string) {
	string = string.toLowerCase(); 
	string = string[1].toUpperCase()+string.slice(2);
	// if (string[0] === '"') {
	// 	string = string[0]+string[1].toUpperCase() + string.substring(2, string.length-1);
	// }
	string = string.replace(/\n/g, " ")
	string = string.replace(/ i /g, " I ")
	return string
}

module.exports = {
  createHaiku: createHaiku,
};

// function writeLine (par, length, start, pos) {
// 	var word = par[start].toLowerCase();
// 	//if paragraph runs out and word is undefined
// 	//start at the beggining of the paragraph
// 	if (!word) { 
// 		start = 0; 
// 		word = par[start];
// 	}
// 	var searchWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
// 		searchWord = word.replace(/\s{2,}/g,"");
// 	var sylNum = getSyllables(searchWord);
// 	var POS = tagger.tag([word])[0][1];

// 	if (length === 0) {
// 		return ""
// 	}
// 	//check if it's in dictionary file
// 	if (dictionary[searchWord.toUpperCase()]){
// 		sylNum = dictionary[searchWord.toUpperCase()].syllableCnt 
// 	}
// 	//if too many syllables
// 	if (sylNum > length) {
// 		return writeLine(par, length, start+1)
// 	}

// 	if (skip.indexOf(word) >= 0) {
// 		return writeLine(par, length, start+1)
// 	}
// 	//don't end with on certain words
// 	if (cantEndOn.indexOf(word) >= 0 && length === 1) {
// 		return writeLine(par, length, start+1)
// 		//console.log("nope", word, length)
// 	}
// 	if (length === 1) {
// 		word.replace(/\'s/g, "")
// 	}
// 	return word+" "+writeLine(par, length-sylNum, start+1, null)
// }
