// class 4

var dropzone;

function setup() {
  noCanvas();
  dropzone = select("#dropzone");
  dropzone.dragOver(high);
  dropzone.dragLeave(unhigh);
  dropzone.drop(gotFile, unhigh);
}

function draw() {
}

function high() {
  dropzone.style('background', 'lightblue');
}

function unhigh() {
  dropzone.style('background', 'lightgreen');
}

function gotFile(file) {
  if (file.type === 'text') {
    createP(file.data);
    console.log("got file " + file.name);
  }
}
