// node
//created by Michael Braverman on April 18, 2016

var Twit = require('twit');

var config = require("./config");


var T = new Twit(config);

// posting status
var update = 'statuses/update';

// schnge text
var tweet= {
  status: 'Tzt, tzt... ',
  // in_reply_to_status_id: 'whoisbma'
};

function ontTweet(err, data, response) {
  console.log("succesful tweet 3!");
  // console.log(err);
  console.log(data);
  // console.log(response);
}

T.post(update, tweet, ontTweet);

// console.log(T);
