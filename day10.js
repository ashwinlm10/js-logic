// function prodofArr(arr){
//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 15){
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }
// console.log(prodofArr([5, 10, 15, 20, 25, 30]));

// function findPositive(arr){
//     let count = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             count++
//         }
//     }
//     return count
// }
// console.log(findPositive([10, -5, 20, -2, 0, 15, -8]));

//! filter method
// const numbers = [10, 15, 20, 25, 30, 35, 40];

// let res = numbers.filter((n => n > 20))
// console.log(res);

//! map

// const numbers = [2, 4, 6, 8];

// let result = numbers.map(num => num * 3)
// console.log(result);

//! filter + map

// const numbers = [5, 10, 15, 20, 25, 30];

// let res1 = numbers.filter(num => num > 10)
// console.log(res1);

// let res2 = res1.map(num => num * 2)
// console.log(res2);

//! reduce

// const numbers = [5,10,15];

// let result = numbers.reduce((acc, currentValue) => {
//     return acc + currentValue
// }, 0)
// console.log(result);

// const numbers = [5, 10, 15];

// let result = numbers.reduce((acc, currentValue) => {
//     return acc + currentValue
// }, 0)
// console.log(result);

// const numbers = [5, 12, 8, 20, 3, 15];

// let result = numbers.filter(n => n > 10)
// result.reduce((acc, currentValue) => {
//     return acc > 10, currentValue < 15
// }, 0)
// console.log(result);

//! find
// const numbers = [5, 12, 8, 20, 3, 15];
// let result = numbers.find((n) => n > 10); // find will return the first occurance
// console.log(result);

//!some
// const numbers = [3, 7, 12, 18, 21];
// let result = numbers.some(n => n > 20)
// console.log(result);

//!every

// const numbers = [10, 20, 30, 40];
// let result = numbers.every(n => n > 5)
// console.log(result);

//! findIndex()

// const numbers = [10, 25, 30, 45, 50];

// let result = numbers.findIndex(n => n > 30)
// console.log(result);

//! forEach()

// const numbers = [10, 20, 30, 40];
// let res = numbers.forEach(n => console.log(n * 2));

//! inclueds()

// const fruits = ["apple", "banana", "mango", "orange"];
// let res = fruits.includes("mango")
// console.log(res);  //! true

//! map + filter

// const numbers = [5, 12, 18, 7, 25, 30, 9, 40];
// let res = numbers.filter(num => num > 15)
// let res2 = res.map(num => num * 2)
// console.log(res2);

//! map-filter-reduce

// const numbers = [5, 12, 18, 7, 25, 30, 9, 40];
// let res = numbers.filter(num => num > 10)
// let res1 = res.map(num => num * 2)
// let op = res1.reduce((acc, currentValue) => {
//     return acc + currentValue
// },0)
// console.log(op);

//! filter+map+reduce

// const numbers = [3, 8, 12, 15, 21, 24, 30, 35];
// let result = numbers.filter(n=> n > 10 &&  n % 2 == 0)
// let result1 = result.map(n => n * n)
// let res = result1.reduce((acc, currentValue) => {
//     return acc + currentValue
// }, 0)
// console.log(res);

// const numbers = [4, 7, 10, 13, 16, 19, 22, 25];

// let res = numbers.filter(n => n > 10 && n % 2 !== 0)
// let res2 = res.map(n => n * n* n)
// let op = res2.reduce((acc, currentValue) => {
//     return acc + currentValue
// })
// console.log(op);

// console.log(null == null);
// console.log(typeof undefined);
// console.log([] == []);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 success");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p2 error");
//     // resolve("p2 success");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p3 success");
//     reject("p3 reject");
//   }, 3000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((resolve) => {
//     console.log(resolve);
//   })

//   .catch((error) => {
//     console.error(error);
//     console.log(error.error);
//   });

const p1 = new Promise((reslove, reject) => {
    setTimeout(() => {
        reject("p1 is reject")
        // reslove("p1 is success")
    }, 1000);
})

const p2 = new Promise((reslove, reject) => {
    setTimeout(() => {
        // reslove("p2 is success")
        reject("p2 is reject")
    }, 3000);
})

const p3 = new Promise((reslove, reject) => {
    setTimeout(() => {
        // reslove("p3 is success")
        reject("p3 is reject")
    }, 5000);
})

Promise.any([p1, p2, p3])
.then((reslove) => {
    console.log(reslove);
})

.catch((err) => {
    console.log(err);
    console.error(err)
})