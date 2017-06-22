/*
Write a function called greatestToLeast that takes a single argument: an array of numbers called array. The function should return 
an array with the numbers sorted from greatest to least. 
*/
function greatestToLeast(array) {
  return array.sort(function(a,b) {
    return b-a;
  });
}






/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  var result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item, index) {
     return (index === 0 || result[index] < result[index-1]);
    }) &&
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
  
  var input1 = [10, 3, 5, 22, 19];
  var result1 = [22, 19, 10, 5, 3];
  var input2 = [2, 4, 6, 8];
  var result2 = [8, 6, 4, 2];
  
  var testResults = [
    testFunctionWorks(greatestToLeast, input1, result1),
    testFunctionWorks(greatestToLeast, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();