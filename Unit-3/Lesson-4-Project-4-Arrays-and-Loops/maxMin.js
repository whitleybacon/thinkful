function max(numbers) {
  var currentMax = numbers[0]; //get first number in array
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] > currentMax) { //if the current number in the array is greater than the currentMax (first num in array)...
       currentMax = numbers[i]; //assign currentMax to that value
    }
  }
  return currentMax;
}


function min(numbers) {
  var currentMin = numbers[0]; //get first number in array
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] < currentMin) { //if the current number in the array is less than the currentMin (first num in the array)...
       currentMin = numbers[i]; //assign currentMin to that value
    }
  }
  return currentMin;
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
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}


(function runTests() {
  // we'll use the variables in our test cases
  var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  var realMin1 = numList1[3];
  var realMax1 = numList1[6];
  var numList2 = [0, 1, 2, 3, 4];
  var realMin2 = numList2[0];
  var realMax2 = numList2[4];
  
  var testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
  ];
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();