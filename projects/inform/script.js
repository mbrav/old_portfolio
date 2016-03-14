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

// AnalyseHistoricDates
// takes numbers and looks at wether they have words like "in", "of"
// plots the numbers as html elements, x being the year axis
function analyseHistoricDates(data) {
  // takes texts

  // var oldRegexFormula = /(in|of|late|early|mid)\s\d{1,4}/gi;
  var regexFormula = /(?!(in|on|of|late|early)\s)\d{4}/gi;
  // gets all the text until end of sentence after previous formula
  var contextTextRegex = /(?!(in|on|of|late|early)\s)\d{4}(.*?)([.,?])/;
  var regexOutput = data.match(regexFormula);
  var contextTextRegexOutput = data.match(contextTextRegex);

  var max = 0;
  var min = 9999; // should be good until year 9999

  // calculate the minumum and maximum values
  for(var i = 0; i < regexOutput.length; i++) {
    if (regexOutput[i] > max) {
      max = regexOutput[i];
    }

    if (regexOutput[i] < min) {
      min = regexOutput[i];
    }
  }

  for(var i = 0; i < regexOutput.length; i++) {
    // render results
    var resultDiv = createDiv('');
    var textTitle = createElement('h2', regexOutput[i]);
    var textContext = createElement('p', contextTextRegexOutput[i]);
    mapBody.child(resultDiv);
    resultDiv.child(textTitle);
    resultDiv.child(textContext);
    resultDiv.attribute('id', i);
    resultDiv.attribute('class', 'blue');
    textContext.attribute('class', 'black bg-white');

    // positon resulDiv'saccording to the window dimensions
    var x = map(regexOutput[i], min, max, 10, windowWidth - 100);
    resultDiv.position(x + 50, random(windowHeight-50));
  }
  console.log("max = " + max);
  console.log("min = " + min);
}
