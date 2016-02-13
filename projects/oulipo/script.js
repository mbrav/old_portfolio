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

        console.log(arrayText[add]);
        poemArray.push = arrayText[add];
    }
}
