var skip = ["Project","and", "Gutenberg-tm"],
cantEndOn = ["I","was","had","my", "a","of","to", "at","the","with","soon"];
dictionary = require('./dictionary.js')

function createHaiku (obj) {
	console.log("A poem:")
	var order = [5,7,5]; 
	var par;
	for (i in order){
		par = getRandomParagraph (obj,i); 
		console.log(writeLine(par, order[i], 0));
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
	var word = par[start];
	//if paragraph runs out and word is undefined
	//start at the beggining of the paragraph
	if (!word) { 
		// console.log("TEST", word)
		start = 0; 
		word = par[start];
		// console.log("FIXED", word)
	}
	var sylNum = getSyllables(word);

	if (length === 0) {
		return ""
	}
	//check if it's in dictionary file
	if (dictionary[word.toUpperCase()]){
		sylNum = dictionary[word.toUpperCase()].syllableCnt 
	}
	//if too many syllables
	if (sylNum > length) {
		return writeLine(par, length, start+1)
	}
	//skip certain words always
	if (skip.indexOf(word) >= 0) {
		return writeLine(par, length, start+1)
	}
	//don't end with an adjective or preposition
	if (cantEndOn.indexOf(word) >= 0 && length === 1) {
		return writeLine(par, length, start+1)
		//console.log("nope", word, length)
	}


	//console.log("found", word, length)
	return word+" "+writeLine(par, length-sylNum, start+1)
}

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


module.exports = {
  createHaiku: createHaiku,
};


