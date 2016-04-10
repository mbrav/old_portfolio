//happy-api
//created by Michael Braverman on April 10, 2016

var URIbase = "http://api.wordnik.com/v4/word.json/";
var URIword = "fast";
var URIquery = "/relatedWords?useCanonical=false&limitPerRelationshipType=25&";
var apiKey = "api_key=f25591c2a98764f728a0102bd600927221ca11d96990888de";

var data;

var path = URIbase + URIword + URIquery + apiKey;

// setup canvas
var svg = d3.select("body").append("svg")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight)

// add main word
  svg.append("text")
    .text(URIword)
    .attr("dx", window.innerWidth/2-20)
    .attr("dy", window.innerHeight/2-20)
    .attr("class", "fill-red")
    .style("font-size", "40px");

// generate JSON
d3.json(path, function(error, json) {
  if (error) return console.warn(error);
  data = json;

  var elem = svg.selectAll("g")
    .data(json[5].words)

  var elemEnter = elem.enter()
	    .append("g")

  /* Create the text for each block */
  elemEnter.append("text")
    .attr("dx", window.innerWidth/2-20)
    .attr("dy", window.innerHeight/2-20)
    .transition()
    .attr("dx", function() { return (Math.random() * window.innerWidth);})
    .attr("dy", function() { return (Math.random() * window.innerHeight);})
    .text(function(d){
      console.log(d);
      return d});
});
