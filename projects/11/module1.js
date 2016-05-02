// WAY 1

// function myFunction() {
//     console.log('Function Called!');
// }
//
// var myString = 'Whats up!';
//
// module.exports.myFunction = myFunction;
// module.exports.myString = myString;

// WAY 2
module.exports = {
  myFunction:function() {
    console.log('Exported');
  },
  myVaribale: 'Exported Variable',
  myString: 'Whats up!'
}
