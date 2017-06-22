//1. How do I make this function do something in the browser?
function myFunction() {
    console.log("Hello World!");
}


//2. Write a function to multiply 2 numbers that the user passes in
//and log the result to the console.
function myFunction(num1, num2) {
  var result = num1*num2;
  console.log(result);
}

myFunction(2,3);

//3. Write a function to greet the user by first name.
function myFunctionName(name) {
  var greeting = 'Hello ' + name;
  console.log(greeting);
}

myFunctionName('whitley');

//4. Write a function to print whichever 2 words the user types in with 
//an exclamation point after each word.
function myFunc(word1, word2) {
  var ex = word1 + '! ' + word2 + '!';
  console.log(ex);
}

myFunc('hello', 'wisconsin');

//5. Write a function to return the whole number remainder of 2 numbers
//the user passes in.
function myFuncNum(num1, num2) {
  var result = (num1%num2);
  console.log(result);
}

myFuncNum(25, 4);

//6. 