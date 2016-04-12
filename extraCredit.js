var fs = require ("fs"),
 	haiku = require('./haiku_generator'),
	createHaiku = haiku.createHaiku,
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

test(text)

function test(obj) {
	var order = [5,7,5]
	// for (i in order) {
	var par = getRandomParagraph (obj); 
	var word = par[4];
	//console.log(get(word))
	console.log(writeLine (par, 5, 0));
	// }	
}

function writeLine (par, length) {
	var promiseArr = []; 
	var words = []; 
	for (var i = 0; i<=length-1; i++) {
		var word = par[i];
		var searchWord = word.replace(/[.,,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		words.push(function () {
			return new Promise (function (resolve, reject) {
				get(searchWord).then (function(syllables){
					resolve(syllables)
				});
			});
		});
	}
	Promise.all(promiseArr).then(function(data) {
		console.log(words)
	}); 
}

function getRandomParagraph () {
	var randomIndex = getRandom (Object.keys(text));
	var randomPar = text[randomIndex].split(" ");
	return randomPar
}

function getWord (randomPar, num) {
	var currentWord = randomPar[num]
	// var currentWord = randomPar[num].toLowerCase().split("'")
	// if (currentWord.length > 1) {
	// 	currentWord.shift()
	// }
	// currentWord = currentWord[0]
	// if(!isNaN(currentWord[0])){
	// 	return getRandomParagraph ();
	// }
	//.replace(/[.,,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	return currentWord;
}

function get (word) {
	var syllables;
	var syllableCnt;
	var API_BASE = 'http://www.dictionaryapi.com/api/v1/references/sd2/xml/';
	var args = {
		key: '5590eec7-58b6-40f8-b912-60c2e61c7f6a'
	}
	var url = API_BASE + word + '?' + Object.keys( args ).reduce(function(arr, key, idx) {
		arr.push( key + '=' + args[ key ] );
		return arr;
	}, []).join('&');

	return new Promise (function (resolve, reject){
		http.get(url, function (response){
		 	response.setEncoding("utf8");
		 	response.on("data", function(data){
		 		parseString(data, function (err, data) {
		 			data = data.entry_list.entry[0]
		 			var id = data.$.id
		 			syllables = data.pr
		 			resolve(syllables)
		 		});
		 	}); 	 
		});
	});
}

function getRandom (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

