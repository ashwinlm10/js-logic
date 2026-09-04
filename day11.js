// function greaterThan10(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 10){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(greaterThan10([12, 5, 18, 7, 20, 3, 15]));


// const numbers = [12, 5, 18, 7, 20, 3, 15];

// let res = numbers.filter(num => num > 10)
// console.log(res);


//! map + filter
// const numbers = [5, 12, 8, 21, 30, 17, 40, 3];

// let res = numbers.filter(num => num > 10 && num % 2 === 0) .map(num => num * 2)
// console.log(res);

//! map + filter + reduce
// const numbers = [4, 7, 12, 15, 18, 21, 24, 30, 35];

// let res = numbers.filter(num => num % 2 === 0 && num > 10) .map(num => num * num) 
// .reduce((acc, currentValue) => {
//     return acc + currentValue
// },0) 
// console.log(res);

//!
const numbers = [3, 8, 12, 17, 20, 25, 30, 33, 40];
let res = numbers.find( num => num > 25 && num % 2 === 0)
console.log(res);

