var Twit = require("twit");
var poem = require("./app");
var CronJob = require('cron').CronJob;

var Bot = new Twit({
	consumer_key: 'xzVg2iJ91ewWu16tu0bRSpYek',
	consumer_secret: 'D4ZaQVahjCaYsaZFL66gdcYhgQhYgo0DdPAWu3evf1ATmDUefJ',
	access_token: "2483989854-y92rKQ7v1VItak4ahGfX6VtlU4gat1cVlKgohS3", 
	access_token_secret: "RPzpraulzkEA59hprbN5xe4QTXEWWcLKek69CP2FSOkJa"
});



var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '00 30 11 * * 0-6',
  onTick: function() {
  	Bot.post('statuses/update', { status: poem() }, function(err, data, response) {
	});
    /* Runs every weekday (Monday through Friday)
     * at 11:30:00 AM.*/
  },
  start: false,
  timeZone: 'America/New_York'
});
job.start();