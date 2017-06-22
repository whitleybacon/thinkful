/*Both functions should take a single argument: an array of values called array. findLength should return the length of array (i.e. the number of values in the array). accessLastItem
 should return the last value in array without 
 altering array itself.
*/

function findLength(array) {
  return array.length;
}

function accessLastItem(array) {
  return array.pop();
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.error(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

function runTests() {
  
  var list = [1, 4, 9, 16, 25];
  var originalList = [1, 4, 9, 16, 25];
  var length = 5;
  var lastItem = 25;
  
  var testResults = [
    testFunctionWorks(findLength, list, length),
    testFunctionWorks(accessLastItem, list, lastItem),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();