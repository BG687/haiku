var Twit = require("twit");
var poem = require("./extraCredit2");


var Bot = new Twit({
	consumer_key: 'xzVg2iJ91ewWu16tu0bRSpYek',
	consumer_secret: 'D4ZaQVahjCaYsaZFL66gdcYhgQhYgo0DdPAWu3evf1ATmDUefJ',
	access_token: "2483989854-y92rKQ7v1VItak4ahGfX6VtlU4gat1cVlKgohS3", 
	access_token_secret: "RPzpraulzkEA59hprbN5xe4QTXEWWcLKek69CP2FSOkJa"
});

Bot.post('statuses/update', { status: poem() }, function(err, data, response) {
});

