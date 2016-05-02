var url = require('url');
var fs = require('fs');

function render(path, response) {
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

module.exports = {
  // name a fucntion handlRequest
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      // get the path at the end of the url
      var path = url.parse(request.url).pathname;

      // check what url user has entered
      switch (path) {
        case '/':
          render('./index.html', response);
          break;
        case '/login':
          render('./index.html', response);
          break;
        default:
          response.writeHead(404);
          response.write('Route not defined!');
          response.end();
      }
  }
};
