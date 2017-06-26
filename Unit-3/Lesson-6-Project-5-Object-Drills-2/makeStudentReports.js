/*
Take up to 10 minutes to write a function called makeStudentReport that
 takes a single argument, data. data is an array of objects. 
 Each object in the array represents a student and their letter grade
  for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

makeStudentReport should return an array of strings. 
For each item in data, return a string that looks 
like this: '[name]: [grade]'. The name and grade 
values on the student object should be
 substituted in.
*/

function makeStudentsReport(data) {
  var results = [];
  for (var i=0; i<data.length; i++) {
    var item = data[i];
    results.push(item.name + ': ' + item.grade);
  }
  return results;
}

// below produces the same result as ^^, but with `.map`
//I like this one better
function makeStudentsReportAlt(data) {
  return data.map(function(d) {
    return d.name + ': ' + d.grade;
  });
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testIt() {

  var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];

  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  var results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an object');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (var i=0; i < expectations.length; i++) {
    var expect = expectations[i];
    if (!results.find(function(item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
