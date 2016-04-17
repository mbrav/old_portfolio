//Teach Me
//created by Michael Braverman on April 16, 2016


var animation = function( p ) {
  // attributes
  var w = 250;
  var h = 250;

  p.setup = function() {
    p.createCanvas(w, h, WEBGL).position(windowWidth/2 - w/2, 150);
  };

  p.draw = function() {

    p.background(0);
    p.fill(0);
    p.normalMaterial();

    // "wtf? this is so cool!"
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        p.translate(0, 0, 0);
        p.translate(20 * x, 20 * y, 0);
        p.push();
        p.box(10, 10, 0);
        p.pop();
        p.rotateZ(frameCount * 0.02);
        p.rotateX(frameCount * 0.01);
        p.rotateY(frameCount * 0.01);

      }
    }
  };
};

// apply animation sketch
var animationSketch = new p5(animation);
var body;


// p5.js noCanvas DOM stuff
function setup() {
  // colorMode(HSB);
  noCanvas();
  background(20);


  words = ["hello", "nuts", "dinoman", "dineomite", "blow", "bite", "zebra", "hydra", "fuck", "shit"];

  var button1 = select('#button-one');
  var button2 = select('#button-two');

  button1.position(windowWidth/3 - 25, windowHeight - 200);
  button2.position(windowWidth - windowWidth/3 - 25, windowHeight - 200);

  button1.mouseClicked(one);
  button2.mouseClicked(two);

  // Smart part
  var net = new brain.NeuralNetwork();

  net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);

  var output = net.run([1, 0]);  // [0.987]
  console.log(output);
}

function draw() {
}

function one() {
  console.log("one");
}

function two() {
  console.log("two");

}
