//infORM alpha
//created by Michael Braverman on March 12, 2016

// DOM elements
var title, aboutText, textField, submitButton, backButton;

// App elements
var rawInputText;

function setup() {
  noCanvas();

  title = select('#title');
  aboutText = select('#about-text');
  textField = select('#text-field');
  submitButton = select('#submit-button');
  backButton = select('#back-button');
  aboutText.hide();

  submitButton.mousePressed(submit);
  backButton.mousePressed(back);

  title.mouseOver(function show(){
    aboutText.show();
    console.log("about-text: show");
  });

  title.mouseOut(function hide(){
    aboutText.hide();
    console.log("about-text: hide");
  });
}

function draw() {
}

function submit() {
  rawInputText = textField.value();
  console.log(rawInputText);
  var submitBody = select('#submit-page');
  var mapBody = select('#map-page');
  submitBody.hide();
  mapBody.show();
}

function back() {
  var submitBody = select('#submit-page');
  var mapBody = select('#map-page');
  submitBody.show();
  mapBody.hide();
}
