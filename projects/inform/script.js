//infORM alpha
//created by Michael Braverman on March 12, 2016

// DOM elements
var submitBody, mapBody, title, aboutText, textField, submitButton, backButton;

// App elements
var rawInputText;

function setup() {
  noCanvas();

  submitBody = select('#submit-page');
  mapBody = select('#map-page');

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
  });

  title.mouseOut(function hide(){
    aboutText.hide();
  });
}

function draw() {
}

function submit() {
  // DOM rendering
  submitBody.hide();
  mapBody.show();

  // App function
  rawInputText = textField.value();
  analyseHistoricDates(rawInputText);
}

function back() {
  submitBody.show();
  mapBody.hide();
}

// TEXT ANALYSIS FUNCTIONS
function analyseHistoricDates(data) {

  // did not sucessfully applied "?=" or "?:" expressions
  var regexFormula = /(in|of|late|early|mid)\s\d{3,4}/gi;
  var regexOutput = data.match(regexFormula);

  var max = 0;
  var min = 9999; // should be good until year 9999

  for(var i = 0; i < regexOutput.length; i++) {
    // necessary to etract only the n umbers
    // now regexOutput[][] will have arrays in arrays :/
    regexOutput[i] = regexOutput[i].match(/\d{3,4}/);

    // check the minumum and maximum balues
    if (regexOutput[i][0] > max) {
      max = regexOutput[i][0];
    }

    if (regexOutput[i][0] < min) {
      min = regexOutput[i][0];
    }
  }

  for(var i = 0; i < regexOutput.length; i++) {
    // render results
    var resultDiv = createDiv('');
    var textTitle = createElement('h2', regexOutput[i][0]);
    mapBody.child(resultDiv);
    resultDiv.child(textTitle);
    resultDiv.attribute('id', i);

    var x = map(regexOutput[i][0], min, max, 50, windowWidth - 50);
    resultDiv.position(x, random(windowHeight));
  }
  console.log(max);
  console.log(min);
}
