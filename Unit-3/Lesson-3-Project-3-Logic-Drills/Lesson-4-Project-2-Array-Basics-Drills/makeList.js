/*
Write a function called makeList that takes three arguments 
(item1, item2, item3) and returns an array containing 
the three items.
*/

function makeList(item1, item2, item3) {
  return [item1, item2, item3];
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testMakeList() {
  
  var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  var result = makeList(items[0], items[1], items[2]);
  
  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  } 
}

testMakeList();