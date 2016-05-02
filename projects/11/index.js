// node
//created by Michael Braverman on April 18, 2016

var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8000);

// var Twit = require('twit');
// var config = require("./config");
// var T = new Twit(config);
// // posting status
// var update = 'statuses/update';
//
// // schnge text
// var tweet= {
//   status: 'Tzt, tzt... ',
// };
//
// function onTweet(err, data, response) {
//   console.log("succesful tweet!");
//   // console.log(err);
//   console.log(data);
//   // console.log(response);
// }
//
// T.post(update, tweet, onTweet);
