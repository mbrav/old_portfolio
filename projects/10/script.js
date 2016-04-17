//Teach Me
//created by Michael Braverman on April 16, 2016


// animation canvas
var p5Animation = new p5(function(sketch) {
  var x = 100, y = 100;

  sketch.setup = function() {
    var anim = sketch.createCanvas(150, 150);
    anim.position(300, 50);
    anim.background(20);
    anim.class('animation');
  };

  sketch.draw = function() {
    anim.stroke(200);
    anim.line(10, 10, 50, 50);
  };
});


function setup() {
  // colorMode(HSB);
  createCanvas(150, 150);
  // noCanvas();
  background(20);

  words = ["hello", "nuts", "dinoman", "dineomite", "blow", "bite", "zebra", "hydra", "fuck", "shit"];

  var button1 = select('#button-one');
  var button2 = select('#button-two');

  button1.position(windowWidth/3, windowHeight - 200);
  button2.position(windowWidth - windowWidth/3, windowHeight - 200);

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
