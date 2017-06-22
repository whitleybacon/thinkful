function shortWords(array) {
  return array.filter(function(word) {
    return word.length < 6;
  });
}






/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

/*Write a function called shortWords that takes a single argument: an array of strings called array. The function should return
 an array with only strings that are shorter than
  5 characters. T
*/

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
  
  var input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue'];
  var result1 = ['cat', 'dog', 'blue'];
  var input2 = ['rainbow', 'the', 'big'];
  var result2 = ['the', 'big'];
  
  var testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();