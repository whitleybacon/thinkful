/*
validateKeys.This function takes two arguments, object and expectedKeys. object is (you guessed it!) 
an object that we want to validate keys for. expectedKeys is an array of keys that we expect to find on the object.

validateKeys should return true if object has all 
of the keys from expectedKeys, and no additional
 keys. It should return false if one or more of the 
 expectedKeys is missing from the object, or if the object contains extra keys not
  in expectedKeys.
*/

var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused'
}


var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
  
  // if there's not the same number of object keys
  // and expected keys, then we know there are missing or
  // extra keys, so return false
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  
  // we iterate over each expected key and verify that
  // it's found in `object`.
  for (var i; i<expectedKeys.length; i++) {
    if (!Object.keys(object).find(function(key) {
      return key === expectedKeys[i];
    })) {
      return false;
    }
  }
  // if we get to this point in our code, the keys are valid
  // so we return `true`
  return true;
}

function testIt() {
  var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  var objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  var expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }
  
  console.log('SUCCESS: `validateKeys` is working');
}

testIt()