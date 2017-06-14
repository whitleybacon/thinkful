function wisePerson(wiseType, whatToSay) {
  var result = 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
  return result;
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  } 
}

testWisePerson();