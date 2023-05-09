// // -----------------Task 1-----------

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else { 
//   return "Odd";
//   }
// }

// function orOdd(number) {
// return  number % 2 === 0? "Odd" : "Even"
// }

// function basicOp(operation, value1, value2)
// {
// let result;

// if (operation === '+') {
//   result = value1 + value2;
// } else if (operation === '-') {
//   result = value1 - value2;
// } else if (operation === '*') {
//   result = value1 * value2;
// } else if (operation === '/') {
//   if (value2 === 0) {
//     return "error. try any number in value2"
//   }
//   result = value1 / value2;
// } else {
//   return "error. invalid operation";
// }
// return result;
// }

// // Write a function to convert a name into initials.
// //  This kata strictly takes two words with one space in between them.
// // The output should be two capital letters with a dot separating them.
// // It should look like this:
// // Sam Harris => S.H
// // patrick feeney => P.F
// function abbrevName(name){

//  const nameArray = name.trim().split(' ');
//  const firstNameIn = nameArray[0][0].toUpperCase();
//  const secondName = nameArray[1][0].toUpperCase();
//  const initials = firstNameIn + '.' + secondName;
//  return initials;
  

// }

// function abbrevName2(name){

//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// function abbrevName3(name){

//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }

// function abbrevName4(name){
//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }

// // Write a function that takes an array of numbers and returns the sum 
// // of the numbers. The numbers can be negative or non-integer. If 
// // the array does not contain any numbers then you should return 0.

// function sum (numbers) {
//   const totalSumm = numbers.reduce((total, number) => {
//     return total + number;
//   }, 0);
  
//   return totalSumm
// };

// let array = [1, 5.2, 4, 0, -1];

// function sum2 (array) {
//   let res = 0;
//   for (let i = 0; i < array.length; i++) {
//     res = res + array[i];
//   }
//   return res;
  
// }
// console.log(sum(array));

// function sum3 (numbers) {
//   if(numbers.length === 0){
//     return 0;
//   }
//   else {
//     let sumNumbers = 0;
//     for (e of numbers) {
//       sumNumbers += e;
//     }
//     return sumNumbers;
//   }    
// };

// Створіть функцію з двома аргументами, яка повертатиме масив перших nкратних x.

// Припустімо, що і дане число, і кількість разів для підрахунку будуть додатними числами, більшими за 0.

// Повертає результати у вигляді масиву або списку (залежно від мови).

// function countBy(x, n) {
//   var z = []
//   for (var i = 1; i <= n; i++) {
//     z.push(x* i);
//     console.log(z);
//   }
//   return z
  
// }
// console.log(countBy(20, 3));

// class SmallestIntegerFinder {
//   findSmallestInt(args) { 
//     if (args.lengt === 0) {
//       return "error. Number not found"
//     } else {
//     const min =  Math.min(...args);
//     return min;}
//   }
// }

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  const positiveValues = arr.filter(el => el >= 0);
  sum = positiveValues.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);
  return sum;
}

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// Write function RemoveExclamationMarks which removes all 
// exclamation marks from a given string.
function removeExclamationMarks(s) {
  const newStr = s.replace(/!/g,"");
  return newStr;
}