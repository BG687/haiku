//PRP Personal pronoun(I,you,she)
	//https://en.wikipedia.org/wiki/Parse_tree
	//https://github.com/dariusk/pos-js

module.exports = {
	IN: {
		description: "Preposition of,in,by", 
		acceptableFollowers: ["NN", "NNP", "NNPS", "EX"]
	}, 
	CC: {
		description: "Coord Conjuncn and,but,or",
		acceptableFollowers:[]
	}, 
	CD: {
		description: "Cardinal number one,two",
		acceptableFollowers:[]
	}, 
	DT: {
		description: "Determiner   the,some",
		acceptableFollowers:[]
	} ,            
	EX: {
		description: "Existential there there",
		acceptableFollowers:[]
	}, 
	FW: {
		description: "Foreign Word mon dieu",
		acceptableFollowers:[]
	}, 
	IN: {
		description: "Preposition of,in,by",
		acceptableFollowers: ["NN", "NNP", "NNPS", "EX"]
	} ,
	JJ: {
		description: "Adjective big",
		acceptableFollowers: ["NN", "NNP", "NNPS"]
	}, 
	JJR: {
		description: "Adj., comparative bigger",
		acceptableFollowers: ["NN", "NNP", "NNPS"]
	}, 
	JJS: {
		description: "Adj., superlative biggest",
		acceptableFollowers: ["NN", "NNP"]
	}, 
	LS: {
		description: "List item marker 1,One",
		acceptableFollowers:[]
	},
	MD_Modal: {
		description: "can,should",
		acceptableFollowers:["VB", "VBP"]
	},                    
	NNNoun: {
		description: "dog",
		acceptableFollowers:["is", "VB", "VBD", "VBP"]
	},
	NNP: {
		description: "Proper noun, sing.      Edinburgh",
		acceptableFollowers:["is", "VB", "VBD", "VBP"]
	}, 
	NNPS: {
		description: "Proper noun, plural Smiths",
		acceptableFollowers: ["is", "VB", "VBD", "VBP"]
	}, 
	NNS: {
		description: "Noun, plural dogs",
		acceptableFollowers:["is", "VB", "VBD", "VBP"]
	}, 
	POS: {
		description: "Possessive ending       Õs",
		acceptableFollowers:["JJ", "JJR", "JJS", "NN", "NNP", "NNPS"]
	}, 
	PDT: {
		description: "Predeterminer           all, both",
		acceptableFollowers:[]
	}, 
	PP$: {
		description: "Possessive pronoun      my,oneÕs",
		acceptableFollowers:[]
	}, 
	PRP: {
		description: "Personal pronoun         I,you,she",
		acceptableFollowers:[]
	}, 
	RB: {
		description: " Adverb                   quickly",
		acceptableFollowers:[]
	},
	RBR: {
		description: "Adverb, comparative     faster",
		acceptableFollowers:[]
	}, 
	RBS: {
		description: "Adverb, superlative     fastest",
		acceptableFollowers:[]
	}, 
	RP: {
		description: "Particle                 up,off",
		acceptableFollowers:[]
	}, 
	SYM: {
		description: "Symbol                  +,%,&",
		acceptableFollowers:[]
	}, 
	TO: {
		description: "ÒtoÓ                     to",
		acceptableFollowers:[]
	}, 
	UH: {
		description: "Interjection             oh, oops",
		acceptableFollowers:[]
	}, 
	VB: {
		description: "verb, base form          eat",
		acceptableFollowers:[]
	}, 
	VBD: {
		description: "verb, past tense        ate",
		acceptableFollowers:[]
	}, 
	VBG: {
		description: "verb, gerund            eating",
		acceptableFollowers:[]
	}, 
	VBN: {
		description: "verb, past part         eaten",
		acceptableFollowers:[]
	},
	VBP: {
		description: "Verb, present           eat",
		acceptableFollowers:[]
	}, 
	VBZ: {
		description: "Verb, present           eats",
		acceptableFollowers:[]
	}, 
	WDT: {
		description: "Wh-determiner           which,that",
		acceptableFollowers:[]
	}, 
	WP: {
		description: "Wh pronoun               who,what",
		acceptableFollowers:[]
	}, 
	WP$: {
		description: "Possessive-Wh           whose",
		acceptableFollowers:[]
	}, 
	WRB: {
		description: " Wh-adverb               how,where",
		acceptableFollowers:[]
	},
	PRP: {
		description: "Personal pronoun(I,you,she)",
		acceptableFollowers: ["VB","VBD","VBG","VBN","VBP","VBZ"]
	}, 
	PRP_object: {

	}
}

