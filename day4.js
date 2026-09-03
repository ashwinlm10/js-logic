//! check the first non repeting character
// let str = "programming"

// for(let i = 0; i < str.length; i++){

//     let count = 0
//     for(let j = 0; j < str.length; j++){
//         if(str[i] == str[j]){
//             count++
//         }
//     }
//     if(count === 1){
//         console.log(str[i]);
//         break
//     }
// }

//!check anagrams
// let str1 = "silent";
// let str2 = "listen";

// if (str1.length !== str2.length) {
//   console.log("not an anagram");
// }

// for(let i = 0; i < str1.length; i++){
//     if()
// }

// let str = "javascript";
// let vowel = "aeiou"
// let result = ""

// for(let i = 0; i < str.length; i++){
//     if(vowel.includes(str[i])){
//         result += str[i]
//     }
// }
// console.log(result);


// let str = "javascript";
// let result = ""
// let vowel = "aeiou"

// for(let i = 0; i < str.length; i++){
//     if(!vowel.includes(str[i]))
//         result += str[i]
// }
// console.log(result);

let str = "I love javascript";
let result = " "

for(let i = 0; i < str.length; i++){
    if(i === 0 || i === str.length - 1 || str[i + 1] === " "){
        result += str[i]
    }
}
console.log(result);
