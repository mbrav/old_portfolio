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

        add += primeNumbers[i % primeNumbers.length] + i;
        console.log(add % arrayText.length);

        poemArray.push(arrayText[add % arrayText.length]);
    }

    // generate poem in html
    document.write("<h1>Generated Poem</h1><h3>Enjoy!</h3>");
    for (var a = 1; a < 9; a++) {
        for (var i = 1; i < 5; i++) {

            var randomSentenceSize = 10; // to randomize
            document.write("<p>");

            for (var j = 1; j < randomSentenceSize; j++) {
                // Problem: document.write does not write arrays
                document.write(poemArray[a*i*j]);
                document.write(" ");
            }

            document.write("</p>");
        }
        document.write("<p> ---- </p>");
    }
}
