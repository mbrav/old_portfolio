// Oulipo

var primeNumbers = [2,3,5,7,11,13,17,19];

function generate(id) {
    var textBox = document.getElementById(id);

    // get the text from the text field
    var rawText = textBox.value;

    // split the text into a word array
    var arrayText = rawText.split(" ");
    var poemArray = [];
    var add = 0;

    // generate the poem into the poemArray
    for (var i = 0; i < arrayText.length * 10; i++) {

        add += primeNumbers[i % primeNumbers.length];
        add = (add + i) % arrayText.length;

        poemArray.push = arrayText[add];
    }

    // generate poem in html
    document.write("<h1>Generated Poem</h1><h3>Enjoy!</h3>");


    for (var a = 0; a < 8; a++) {
        for (var i = 0; i < 4; i++) {

            var randomSentenceSize = 10;
            document.write("<p>");

            for (var j = 0; j < randomSentenceSize; j++) {
                // Problem: document.write does not write arrays
                document.write(poemArray.length);
            }

            document.write("</p>");
        }
        document.write("<p> ---- </p>");
    }
}
