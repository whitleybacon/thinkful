/*
*Write a function called addToList that accepts an array and an item as arguments, and returns the array with the item added to the end. 
This function will have the side effect of changing the original array. 
*/

function addToList(list, item) {
  list.push(item);
  return list;
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testAddToList() {
  
  var input1 = ["red", "blue", "green"]
  var input2 = "pink"
  var expected = ["red", "blue", "green", "pink"]
  var result = addToList(input1, input2);
  
  if (
    result && result.length && expected.length === result.length &&
    expected.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `addToList` works!');
  } else {
    console.error('FAILURE: `addToList` is not working');
  } 
}

testAddToList();