var url = require('url');
var fs = require('fs');
var request = require("request");
var cheerio = require('cheerio');

// for web scraping
url = 'http://www.imdb.com/title/tt1229340/';

module.exports = {

  // name a fucntion handlRequest
  handleRequest: function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});

    // get the path at the end of the url
    var path = url.parse(request.url).pathname;

    // check what url user has entered
    switch (path) {
      case '/':
        render('./pages/index.html', response);
        break;
      case '/1':
        render('./pages/index.html', response);
        break;
      case '/2':
        render('./pages/index2.html', response);
        break;
      case '/3':
        render('./pages/index3.html', response);
        break;
      case '/4':
        render('./pages/index4.html', response);
        break;
      case '/co2':
        break;
      default:
        break;
      response.writeHead(404);
      response.write('Route not defined!');
      response.end();
    }
  }
};

function render(path, response) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    }  else {
      response.write(data);
    }
    response.end();
  });
}
