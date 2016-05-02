function setup() {
  noCanvas();

}

function draw() {

}

function generate() {
  // get the element from the text field
  var rawText = select('.enter').value();
  var words = RiTa.tokenize(rawText);

  for (var i = 0; i < words.length; i++) {
    createP(words[i]).position(random(windowWidth), random(windowHeight));
  }
}
