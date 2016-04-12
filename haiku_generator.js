
function createHaiku(structure) {
	var order = [5,7,5]; 
	varywordCount(structure, 7)
	for (i in order){
		
		//print var nums = [];//1,2,3
		// console.log(getRandom(structure[order[i]]))
	}
}

function varywordCount (arr, num) {
	if (num === 0) {
		return ""
	}
	var numArr = Object.keys(arr).slice(1, num+1)
	var randomSylNum = parseInt(getRandom(numArr))
	var word = getRandom(arr[randomSylNum])
	console.log(randomSylNum, num, word, num - randomSylNum)
	return word+varywordCount(arr, num-randomSylNum)


}

function getRandom (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
  createHaiku: createHaiku,
};

