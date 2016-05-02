// node
//created by Michael Braverman on April 18, 2016

var http = require('http');
var module1 = require('./module1');

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(module1.myString);
  module1.myFunction();
  response.end(); // end response
}

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
