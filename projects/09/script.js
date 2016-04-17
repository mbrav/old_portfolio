function setup() {
  noCanvas();

  var words = RiTa.tokenize("The elephant took a bite!")

  console.log(words);
  console.log(RiTa.getPosTags("I am hungry, The elephant took a bite"));

  var rm = new RiMarkov(4);
  var rm = new RiMarkov(4);
  rm.loadText("The girl went to a game after dinner. The teacher went to dinner with a girl.");
  var sentences = rm.generateSentences(8);

  console.log(sentences);

  for (var i = 0; i < 8; i++) {
    createP(sentences);
  }
}

function draw() {

}
