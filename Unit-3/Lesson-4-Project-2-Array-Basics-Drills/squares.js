/*
Write a function called squares that takes a single argument: an array of values called array. The function should 
return a new array with the square of each value from 
the original array. 
*/

function squares(array) {
  var result = array.map(function(num) {
    return num**2;
  });
  return result;

}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = [1, 2, 3, 4, 5];
  var result1 = [1, 4, 9, 16, 25];
  var input2 = [2, 4, 6, 8];
  var result2 = [4, 16, 36, 64];
  
  var testResults = [
    testFunctionWorks(squares, input1, result1),
    testFunctionWorks(squares, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();