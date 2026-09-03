// let str = "JavaScript123";
// let count = 0

// for(let i = 0; i < str.length; i++){
//     if(str[i] >= "0" && str[i] <= "9"){
//         count++
//     }
// }
// console.log(count);

// let str = "helloWorld123";

// for(let i = 0; i < str.length; i++){
//     if(str[i] >= "A" && str[i] <= "Z"){
//         console.log(str[i]);
//         break
//     }
// }

// let str = "programming";
// let count = 0

// for(let i = 0; i < str.length; i++){
//     if(str[i] === "m"){
//         count++
//     }
// }
// console.log(count);

// let str = "hello";
// let result = ""

// for(let i = str.length - 1; i >=0; i--){
//     result += str[i]
// }
// console.log(result);

// let str = "I am learning JavaScript";
// let result = ""

// for(let i = 0; i < str.length; i++){
//     if(str[i] !== " "){
//         result += str[i]
//     }
// }
// console.log(result);

// let str = "abc123xyz45";
// let result = ""

// for(let i = 0; i < str.length; i++){
//     if(str[i] >= "a" && str[i] <= "z"){
//         result += str[i] 
//     }
// }
// console.log(result);


// let str = "abc123XYZ45";
// let result = ""

// for(let i = 0; i < str.length; i++){
//     if(str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z"){
//         result += str[i]
//     }
// }
// console.log(result);

// let str = "programming"
// let result = ""
// let count = 0

// for(let i = 0; i < str.length; i++){
//     if(!result.includes(str[i])){
//         result +=  str[i]
//         count++
//     }
// }
// console.log(count);

// let str = "banana"
// let result = ""

// for(let i = 0; i <  str.length; i++){
//     if(!result.includes(str[i])){
//         result +=  str[i]
//     }
// }
// console.log(result);

let str = "hello"
let count = 0

for(let i = 0; i < str.length; i++){
        for(let j = 0; j <  str.length; j++){
            if(str[i] === str[j]){
                count++
            }
        }
        console.log(count);
    }
