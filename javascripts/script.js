var x = 100;
var y = 100;

var xDiff;
var yDiff;

var randomX;
var randomY;

function setup() {
  createCanvas(600,600);
  background(191,183,159);
  noStroke();
  generateCordinate();
}

function draw() {

  if (randomX == x || randomY == y) {
    // if the cordinates reach the number
    // generate a new one
     generateCordinate();
     console.log("GENERATE!");
  } else {
    if (randomX > x) {
      x ++;
    } else {
      x --;
    }
    if (randomY > y) {
      y ++;
    } else {
      y --;
    }
  }

  background(191,183,159);
  fill(79,107,98);

  xDiff = x - width/2;
  yDiff = y - height/2;

  rect(width/2 + xDiff, height/2 + yDiff, -xDiff, yDiff);
  rect(width/2 + xDiff, height/2 - yDiff, xDiff, yDiff);
  rect(width/2 - xDiff, height/2 + yDiff, -xDiff, yDiff);
  rect(width/2 - xDiff, height/2 - yDiff, xDiff, -yDiff);

  textSize(40);

  if (x % 10 < 5) {
    fill(255,255,255);
  } else {
    fill(143,16,16);
  }

  text("Whats", 200, 300);
  text("GUCCI?", 200, 340);
  console.log(randomX);
  console.log(randomY);
}

function generateCordinate() {
  randomX = int(random(0,width));
  randomY = int(random(0,height));
}
