// node
//created by Michael Braverman on April 18, 2016

var http = require('http');
var fs = require('fs'); // filw sysytem
var module1 = require('./module1');

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
  // response.writeHead(200, {'Content-Type': 'text/plain'});
  response.writeHead(200, {'Content-Type': 'html'});

  fs.readFile('./index.html', null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    }  else {
      response.write(data);
    }
    response.end();
  });
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
