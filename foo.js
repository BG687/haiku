var syllable = require('syllable');

function print( word ) {
	console.log( syllable( word ) );
}

print( 'riot' );
print( 'client' );

