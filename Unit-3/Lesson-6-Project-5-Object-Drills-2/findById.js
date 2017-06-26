/*function called findById. This function takes two arguments items and idNum. items is an array of objects. idNum is the id we're trying to find in items. The function should look for an item with the id idNum in the array items. 
If found, it should return that item.
*/

// you can pass in `scratchData` to test out `findByid`
// your function
var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

function findById(items, idNum) {
  return items.find(function(item) {
    return item.id === idNum;
  });
  
  // could also be implemented without using `.find`
  // using plain old looping like this:
  // 
  // for (var i=0; i<items.length; i++) {
  // if (items[i].id === idNum) {
  //    return items[i];
  //  }
  // }
 }


// 

function testIt() {
  var testData = [
    {id: 1, foo: 'bar'},
    {id: 2, foo: 'bizz'},
    {id: 3, bang: 'boo'}
  ];
  var result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' +
      result.id
    );
    return
  }
  if (result.bang !== 'boo') {
    console.error('Expected all key/value pairs from target object to be returned');
    return
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();