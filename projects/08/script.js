//happy-api
//created by Michael Braverman on April 10, 2016

var URIbase = "http://api.wordnik.com/v4/word.json/";
var URIword = "hello";
var URIquery = "/relatedWords?useCanonical=false&limitPerRelationshipType=25&";
var apiKey = "api_key=f25591c2a98764f728a0102bd600927221ca11d96990888de";

var data; // a global
d3.json(URIbase + URIword + URIquery + apiKey, function(error, json) {
  if (error) return console.warn(error);
  data = json;
  console.log(data);
});

function render(){
  // DATA JOIN
  // Join new data with old elements, if any.
  // var p = d3.select("body").selectAll("p").data(data);
  //
  // // ENTER
  // p.enter().append("p")
  // .text(function(d) { return "I’m number " + d + "!"; })
  //
  // p.transition().duration(200)
  // .style("font-size", function(d) {return d + "px";});

  // p.exit().remove();

  var svg = d3.select("svg").selectAll("txt").text({data, function(d){
      return d[5].words
  }});

}

// first update
render();

// set interval for further updates
// setInterval(render, 200);
