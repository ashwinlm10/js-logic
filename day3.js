// let str = "banana";

// for(let i = 0; i < str.length; i++){
//     let count = 0
//         for(let j = 0; j < str.length; j++){
//             if(str[i] === str[j]){
//                 count++
//             }
//         }
//         console.log(count);
// }

// let str = "banana"
// let result = ""

// for(let i = 0; i <  str.length; i++){
//     let count = 0
//         for(let j = 0; j < str.length; j++){
//             if(str[i] === str[j]){
//                 count++
//             }
//         }
//             if(count > 1 && !result.includes(str[i])){
//                 result += str[i]

//         }
//     }
// console.log(result);

// let str = "mississippi";
// let result = ""

// for(let i = 0; i < str.length; i++){
//     let count = 0
//         for(let j = 0; j < str.length; j++){
//             if(str[i] === str[j]){
//                 count++
//             }
//         }
//             if(count > 1 && !result.includes(str[i])){
//                 result += str[i]

//         }
// }
// console.log(result);

// function palindrome(){
//     let string = "adi"
//     let result = ""

//     for(let i = string.length - 1; i >= 0; i--){
//         result += string[i]
//     }
//     if(string === result){
//         console.log("it is a palindrome");
//     }else{
//         console.log("not a palindrome");
//     }
//     return result
// }
// palindrome()

// function palindrome(){
//     let str = "madam im adam";

//     //!remove-space
//     let result = ""
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             result += str[i]
//         }
//     }
//     //!reverse
//     let reverse = ""
//     for(let i = result.length - 1; i >= 0; i--){
//         reverse += result[i]
//     }
//     //! compare
//     if(reverse === result){
//         console.log("it is a palindrome");
//     }else{
//         console.log("not a palindrome");
//     }
//     return reverse
    
// }
// palindrome()


// let str = "abcdbea";

// for(let i = 0; i < str.length; i++){
//     let count = 0

//     for(let j = 0; j < str.length; j++){
//         if(str[i] === str[j]){
//             count++ 
//         }
//     }
//     if(count === 1){
//         console.log(str[i]);
//         // break
//     }
// }

// let str = "abcdbea";

// for(let i = 0; i < str.length; i++){
//     let count = 0

//     for(let j = 0; j < str.length; j++){
//         if(str[i] === str[j]){
//             count++
//         }
//     }
//     if(count > 1){
//         console.log(str[i]);
//         break
//     }
// }

function GenerateOtp(){
    let otp = Math.round(Math.random() * 9000) + 100
    return `otp is (${otp})`
}
console.log(GenerateOtp());
