// Exercise #1
// var phonebookDict = {
//   Alice: '703-493-1834',
//   Bob: '857-384-1234',
//   Elizabeth: '484-584-2923'
// };
//
// console.log(phonebookDict.Elizabeth);
//
// phonebookDict.Kareem = '968-345-2345';
// console.log(phonebookDict.Kareem);
//
// delete phonebookDict.Alice;
// console.log(phonebookDict.Alice);
//
// phonebookDict.Bob = '968-345-2345';
// console.log(phonebookDict.Bob);
//
// // Prints all of the entries in list format
// console.log(phonebookDict);
//
// // Prints all of them individually in the correct format
// for (var person in phonebookDict) {
//   var number = phonebookDict[person];
//   console.log(person + ':' + number);
// }

// Exercise #2
// function histogram(string) {
//   var tally = {};
//   for (var i = 0; i < string.length; i++) {
//     var letter = string.slice(i, (i+1));
//     if (letter in tally) {
//       tally[letter] += 1;
//     }
//     else {
//       tally[letter] = 1;
//     }
//   }
// return tally;
// }
//
// console.log(histogram('mississippi'));


// var numArray = [1, 2, 3, -4, 5, -6, -7, 8];
//
// var posNum = numArray.filter(function(num) {
//     return num > 0;
// });
//
// var evenNum = numArray.filter(function(num) {
//   return num % 2 === 0;
// });
//
// var sqrNum = numArray.map(function(num) {
//   return num * num;
// });
//
// console.log(posNum);
// console.log(evenNum);
// console.log(sqrNum);

// Cities Exercise
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var coolTemp = cities.filter(function(city) {
//   return city.temperature <= 70;
// });
//
// var cityName = function(name) {
//   console.log('City name: ' + name.name);
// };
//
// console.log(coolTemp);
// cities.forEach(cityName);

// List of names exercise
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
// var hello = function(person) {
//   console.log('Good job, ' + person + '!');
// };
//
// function nameLength(a, b) {
//   return a.length - b.length;
// }
//
// console.log(people.sort(nameLength));
//
// people.forEach(hello);

// var arr = [
//   [1,3,4],
//   [2,4,6,8],
//   [3,6]
// ];
//
// function sum(arr) {
//   return arr.reduce(function(a,b) {
//     return a + b;
//   });
// }
//
// function compare(arr1, arr2) {
//   return sum(arr1) - sum(arr2);
// }
//
// console.log(compare);

// Function that calls another function 3 times
// var hello = function(hello) {
//   console.log('Hello, world!');
// };
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
//
// call3Times(hello);

// Function that calls another function n times
// var hello = function(hello) {
//   console.log('Hello, world!');
// };
//
// function callNTimes(n, fun) {
//   while (n > 0) {
//     fun();
//     n--;
//   }
// }
//
// callNTimes(6, hello);

// Sums up the items in an array
// var arr = [3,4,6,8];
//
// var combine = function(a,b) {
//     return a + b;
// };
//
// var sum = arr.reduce(combine, 0);
//
// console.log(sum);

// Combines the first letters of each word in an array, like an acronym
var words = ['What', 'the', 'fuck'];

var nameList = words.reduce(function(currentWord, word) {
  return currentWord + word.slice(0,1).toUpperCase();
}, '');

console.log(nameList);
