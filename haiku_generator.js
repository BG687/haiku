function createHaiku(structure, obj) {
	var order = structure; 
	for (i in order){
		console.log(getWords(obj, order[i]))
	}
}

function getWords (arr, sylbcnt) {
	var num = sylbcnt;
	if (num === 0) {
		return ""
	}
	var numArr = Object.keys(arr).slice(1, num+1)
	var randomSylNum = parseInt(getRandom(numArr))
	var word = getRandom(arr[randomSylNum])
	return word+" "+getWords(arr, num-randomSylNum)
}

function getRandom (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
  createHaiku: createHaiku,
};

