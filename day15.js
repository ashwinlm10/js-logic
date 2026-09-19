//! 6. Return an array containing the words that appear more than once

// function counter(str){
//     let str1 = str.split(" ")
//     let result = []

//     for(let i = 0; i < str1.length; i++){
//         let count = 0

//         for(let j = 0; j < str1.length; j++){
//             if(str1[i] === str1[j]){
//                 count++
//             }
//             if(!result.includes(str1[i]) && count > 1){
//                 result.push(str1[i])
//             }
//         }
//     }
//     return result
// }
// console.log(counter("apple banana apple orange banana apple"));

//! 7. Return a single string containing only the words with an even number of characters, separated by -.

// function evenChar(str){
//     let str1 = str.split(" ")
//     let result = []

//     for(let i = 0; i < str1.length; i++){
//         if(str1[i].length % 2 == 0){
//             result.push(str1[i])
//         }
//     }
//     return result.join("-")
// }
// console.log(evenChar("JavaScript is very powerful"));

//! 8. Return the first word that appears more than once.

// function firstword(str){
//     let str1 = str.split(" ")

//     for(let i = 0; i < str1.length; i++){
//         let count = 0

//         for(let j = 0; j < str1.length; j++){
//             if(str1[i] === str1[j]){
//                 count++
//             }
//             if(count > 1){
//                 return str1[i]
//             }
//         }
//     }
// }
// console.log(firstword("apple banana mango apple orange banana"));

//! 9. Return the number of times the word "coding" appears.

//const str = "I love coding because coding is fun and coding is useful";

// function coding(str){
//     let str1 = str.split(" ")
//     let count = 0

//     for(let i = 0; i < str1.length; i++){
//         if(str1[i].includes("coding")){
//             // result.push(str1[i])
//             count++
//         }
//     }
//     return count
// }
// console.log(coding("I love coding because coding is fun and coding is useful"));

//! 10 Return the number of unique words, ignoring uppercase/lowercase differences.


// function unique(str){
//     let str1 = str.split(" ")
//     let result = []

//     for(let i = 0; i < str1.length; i++){
//         let word = str1[i].toLowerCase()
//         if(!result.includes(word)){
//             result.push(word)
//         }
//     }
//     return result
// }
// console.log(unique("apple APPLE banana Apple mango BANANA"));











//"apple banana apple orange banana apple"