var x = 0;
var x2 = 255;


function setup() {
  createCanvas(600,600);
  background(191,183,159);
  noStroke();
}

function draw() {
  x ++;
  x2 --;
  background(191,183,159);
  fill(79,107,98);
  rect(0,0, mouseX, mouseY);
  textSize(40);

  if (x % 10 < 5) {
    fill(255,255,255);
  } else {
    fill(143,16,16);
  }
  text("Whats", 200, 300);
  text("GUCCI?", 200, 340);
  console.log(x);
  console.log(x2);
}
