var x = 0;
var x2 = 255;


function setup() {
  createCanvas(600,600);
  background(255,255,0);
}

function draw() {
  x ++;
  x2 --;
  background(x2,x,0);
  rect(0,0,mouseX, mouseY);
  console.log(x);
  console.log(x2);
}
