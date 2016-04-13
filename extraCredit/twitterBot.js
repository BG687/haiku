//https://dev.twitter.com/rest/reference/post/statuses/update

//request query:status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalk
//request url: https://api.twitter.com/1.1/statuses/update.json
//consumer key: D4ZaQVahjCaYsaZFL66gdcYhgQhYgo0DdPAWu3evf1ATmDUefJ
//consomer secret: xzVg2iJ91ewWu16tu0bRSpYek


// mportant: This will only be valid for a few minutes. Also remember the cURL command will actually execute the request.

// Signature base string POST&https%3A%2F%2Fapi.twitter.com%2F1.1%2Fstatuses%2Fupdate.json&oauth_consumer_key%3DxzVg2iJ91ewWu16tu0bRSpYek%26oauth_nonce%3D846832ee594ae160773f1f9305522cfe%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1460569924%26oauth_version%3D1.0%26status%3DMaybe%2520he%2527ll%2520finally%2520find%2520his%2520keys.%2520%2523peterfalk
// Authorization header Authorization: OAuth oauth_consumer_key="xzVg2iJ91ewWu16tu0bRSpYek", oauth_nonce="846832ee594ae160773f1f9305522cfe", oauth_signature="oL%2BG6EY9MgnXjgv6LcsXUzPDOWc%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460569924", oauth_version="1.0"
// cURL command curl --request 'POST' 'https://api.twitter.com/1.1/statuses/update.json' --data 'status=Maybe+he%27ll+finally+find+his+keys.+%23peterfalk' --header 'Authorization: OAuth oauth_consumer_key="xzVg2iJ91ewWu16tu0bRSpYek", oauth_nonce="846832ee594ae160773f1f9305522cfe", oauth_signature="oL%2BG6EY9MgnXjgv6LcsXUzPDOWc%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460569924", oauth_version="1.0"' --verbose

var Twit = require("twit");
var Bot = new Twit({
	consumer_key: 'xzVg2iJ91ewWu16tu0bRSpYek',
	consumer_secret: 'D4ZaQVahjCaYsaZFL66gdcYhgQhYgo0DdPAWu3evf1ATmDUefJ',
	access_token: "2483989854-y92rKQ7v1VItak4ahGfX6VtlU4gat1cVlKgohS3", 
	access_token_secret: "RPzpraulzkEA59hprbN5xe4QTXEWWcLKek69CP2FSOkJa"
	// callback: 'http://svinci131.github.io/landingpage/',
	// x_auth_access_type: "read",
	// x_auth_access_type: "write"

});



Bot.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
});


// var requestToken; 
// var requestTokenSecret; 
// twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
// 	if (error) {
// 		console.log("Error getting OAuth request token : " + error);
// 	} else {
// 		requestToken = requestToken
// 		requestTokenSecret = requestTokenSecret
// 		var url = "https://twitter.com/oauth/authenticate?oauth_token="+requestToken
// 		console.log(url)
// 		// http.get()
// 		//store token and tokenSecret somewhere, you'll need them later; redirect user 
// 	}
// });

// twitter.getAccessToken(requestToken, requestTokenSecret, oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(accessToken)
// 		//store accessToken and accessTokenSecret somewhere (associated to the user) 
// 		//Step 4: Verify Credentials belongs here 
// 	}
// });
