/*
Create an event listener that listens for when a user submits
a form indicating how high to count. 
Should cause the program to create the FizzBuzz sequence
up to the number requested by the user.

For each element in the FizzBuzz sequence, your code should insert 
an element into the .js-results div.

If the element's content is the word "fizz", the div with .fizz-buzz-item
should also get .fizz applied. If "buzz", get .buzz.


*/

var fizzString = 'fizz';
var buzzString = 'buzz';
var fizzBuzzString = 'fizzbuzz';

function getFizzBuzzValue(num) {
  var val = num;
  if (num % 15 === 0) {
    val = fizzBuzzString;
  } else if (num % 5 === 0) {
    val = buzzString;
  } else if (num % 3 === 0) {
    val = fizzString;
  }
  return val;
}

function makeFizzBuzzArray(num) {
  var result = [];
  for (var i=1; i<=num; i++) {
    result.push(getFizzBuzzValue(getFizzBuzzValue(i)));
  }
  return result;
}

function doFizzBuzz(num) {
  var fizzBuzzArray = makeFizzBuzzArray(num);
  fizzBuzzArray.forEach(function(item) {
      var newElem = $(
        '<div class="fizz-buzz-item"><span>' + item + '</span></div>');
      if (item === fizzString || item === buzzString || item === fizzBuzzString) {
        newElem.addClass(item);
      }
      $(".js-results").append(newElem);
  })
}


function handleFormSubmit() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    // in case there's already results
    $(".js-results").empty();
    var choice = parseInt( $(event.currentTarget).find(
      'input[name="number-choice"]').val());
    doFizzBuzz(choice);
  });
}

$(function() {
  handleFormSubmit();
});