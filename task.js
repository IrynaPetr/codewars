// -----------------Task 1-----------

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else { 
  return "Odd";
  }
}

function orOdd(number) {
return  number % 2 === 0? "Odd" : "Even"
}

function basicOp(operation, value1, value2)
{
let result;

if (operation === '+') {
  result = value1 + value2;
} else if (operation === '-') {
  result = value1 - value2;
} else if (operation === '*') {
  result = value1 * value2;
} else if (operation === '/') {
  if (value2 === 0) {
    return "error. try any number in value2"
  }
  result = value1 / value2;
} else {
  return "error. invalid operation";
}
return result;
}

// Write a function to convert a name into initials.
//  This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name){

 const nameArray = name.trim().split(' ');
 const firstNameIn = nameArray[0][0].toUpperCase();
 const secondName = nameArray[1][0].toUpperCase();
 const initials = firstNameIn + '.' + secondName;
 return initials;
  

}