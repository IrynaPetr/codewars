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

function abbrevName2(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName3(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

function abbrevName4(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

// Write a function that takes an array of numbers and returns the sum 
// of the numbers. The numbers can be negative or non-integer. If 
// the array does not contain any numbers then you should return 0.

function sum (numbers) {
  const totalSumm = numbers.reduce((total, number) => {
    return total + number;
  }, 0);
  
  return totalSumm
};

let array = [1, 5.2, 4, 0, -1];

function sum2 (array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res + array[i];
  }
  return res;
  
}
console.log(sum(array));

function sum3 (numbers) {
  if(numbers.length === 0){
    return 0;
  }
  else {
    let sumNumbers = 0;
    for (e of numbers) {
      sumNumbers += e;
    }
    return sumNumbers;
  }    
};

