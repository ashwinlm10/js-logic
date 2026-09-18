//! string + object
//! Count how many times each character appears in the string.

// function strobj(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let current = str[i];

//     if (result[current] === undefined) {
//       result[current] = 1;
//     }else {
//     result[current]++;
// }
//   }
//   return result;
// }
// console.log(strobj("javascript"));

//! string

// function count(str){
//     let word = str.split(" ")
//     let res = word.length
//     console.log(res);
// }
// count("hello worlds")

//! string mixed quesition1

// const str = "  Hello JavaScript World  ";
// let result = str.trim();
// let result1 = result.toLowerCase();
// let result2 = result1.replace("javascript", "coding");
// console.log(result2);

//!Mixed Question 2

// const str = "JavaScript is awesome";
// let result = str.toUpperCase();
// let result1 = result.replaceAll(" ", "-")
// console.log(result1);

//! quesition 3

// const str = "  frontend developer  ";
// let word = str.trim().split(" ")
// let result = word.map(word =>
//     word.charAt(0).toUpperCase() + word.slice(1)
// )
// console.log(result.join(" "));

//! quesition 4

// const str = "  hello javascript world  ";

// let result = str.trim().split(" ")
// let word = result.map(result =>
//     result.charAt(0).toUpperCase() + result.slice(1)
// )
// console.log(word.join(" "))

//! quesition 5

// const str = "  apple banana mango orange  ";
// let result = str.trim().toUpperCase().replaceAll(" ", "-")
// console.log(result);

//! quesition 5

// const str = "  learn javascript with chatgpt  ";
// let result = str.trim().split(" ")
// let words = result.map(result =>
//     result.charAt(0).toUpperCase() + result.substring(1)
// )
// console.log(words.join(" "));

//! quesition 6

// function string(str) {
//   for (let i = 0; i < str.length; i++) {
//     let current = str[i];
//     if (str.indexOf(current) === str.lastIndexOf(current)) {
//       return current;
//     }
// }
// }
// console.log(string("javascript"));

//! quesition 7

// const str = "  JAVASCRIPT   REACT   NODE  ";
// let result = str.trim().toLowerCase().split(" ")
// console.log(result.join(" "));

//! quesition 8

// const str = "I love JavaScript and JavaScript loves me";
// let result = str.replaceAll("JavaScript", "coding")
// console.log(result);

//! quesition 9

// const str = "JavaScript is very powerful";


//! quesition 10
// const str = "https://www.example.com";
// let result = str.slice(8,19)
// console.log(result);

//! quesition 11

// const str = "  Learn-JavaScript-React  ";
// let result = str.trim().replaceAll("-", " ")
// let word = result.charAt(0).toLowerCase() + result.substring(1)
// console.log(word);
