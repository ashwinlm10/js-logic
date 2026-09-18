// let array = [10,[20,30,[40,50],60]]
// let[a,[b,c,[d,e],f]] = array
// console.log(a);

// let numbers = [10,20,30,40,50]
// let [first, ...rest] = numbers
// console.log(first);
// console.log(rest);

// let user = {
//     name: "Ashwin",
//     age: 22,
//     city: "Bangalore",
//     role: "Developer"
// };

// let { name, ...details } = user;

// console.log(name);
// console.log(details);

// let a = [10, 20, 30];

// let b = [5, ...a, 40];

// console.log(b);
// let user = {
//     name: "Ashwin",
//     age: 22,
//     city: "Bangalore"
// };

// let { age, ...rest } = user;

// let newUser = {
//     ...rest,
//     age: 30
// };

// console.log(newUser);

// function test(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// test(10, 20, 30, 40, 50);

// let user = {
//     name: "Ashwin",
//     age: 22,
//     skills: ["HTML", "CSS", "JS"]
// };

// let { name, skills: [first, ...rest] } = user;

// console.log(name);
// console.log(first);
// console.log(rest);

// let user = {
//     name: "Ashwin",
//     age: 22
// };

// let copy = { ...user };

// copy.name = "Rahul";

// console.log(user.name);
// console.log(copy.name);

//! 1.

// function uniqueWord(str){
//     const str1 = str.split(" ")
//     let result = []

//     for(let i = 0; i < str1.length; i++){
//         if(!result.includes(str1[i])){
//             result.push(str1[i])
//         }
//     }
//     return result
// }
// console.log(uniqueWord("apple banana apple mango banana apple"));

//! 2. Return an array containing only the words whose length is greater than 4.

// function word4(str) {
//   let str1 = str.split(" ");
//   let result = [];

//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i].length > 4) {
//       result.push(str1[i]);
//     }
//   }
//   return result;
// }
// console.log(word4("I love javascript and I love coding"));

//!  3. Return an array containing the length of each word.

// function lengthArr(str){
//     let str1 = str.split(" ")
//     let result = []
//     for(let i = 0; i < str1.length; i++){
//         result.push(str1[i].length)
//     }
//     return result
// }
// console.log(lengthArr("hello world javascript"));


//! 4. Return an array containing the uppercase version of only the words whose length is greater than 4.


// function ques(str){
//     let str1 = str.split(" ")
//     let result = []

//     for(let i = 0; i < str1.length; i++){
//         if(str1[i].length > 4){
//             result.push(str1[i].toUpperCase())
//         }
//     }
//     return result
// }
// console.log(ques("apple bat orange cat mango"));

//! Return an array containing the words that:

// Have more than 4 characters
// Are converted to uppercase
// Are stored in reverse order

// const str = ;

function words(str){
    let str1 = str.split(" ")
    let result = []

    for(let i = str1.length - 1; i >= 0; i--){
        if(str1[i].length > 4){
            result.push(str1[i].toUpperCase())
        }
    }
    return result
}
console.log(words("hello world javascript coding"));
