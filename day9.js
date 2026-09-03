// //! fetch api

// // fetch("https://jsonplaceholder.typicode.com/users")

// // //!response
// // .then(response => response.json())

// // //!actaul data

// // .then((data) => {
// //     console.log(data);
// // })

// // //!error handling

// // .catch((error) => {
// //     console.log(error);
// // })

// //!async - await

//  async function userData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = await response.json()
//     console.log(data);

// }catch(error){
//     console.log("network error");

// }

// }

// userData()


//! post method

// async function userData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users",
//             {
//                 method: "POST",

//                 headers: {
//                     "content-type": "application/json"   
//                 },

//                 body: JSON.stringify({
//                     name: "ashwin",
//                     age: 21,
//                     course: "BE"
//                 })
//             }
//         )

//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(networkerror);
//     }
// }
// userData()


// //! put
// async function updateUser(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
//             {
//                 method: "PUT",

//                 headers: {
//                     "content-type": "application/json"
//                 },

//                 body: JSON.stringify({
//                     name: "Ashwin",
//                     age: 23,
//                     course: "M.TEC"
//                 })
//             }
//         )

//         const data = await response.json()

//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// updateUser()

//! delete
// async function deleteUser(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
//             {
//                 method: 'DELETE'
//             },
//         )
//         if(response.ok){
//             console.log("user deleted successfully");
//         }
//         // const data = await response.json()
//         // console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// deleteUser()

//!logic building

// function largestNumber(arr){
//     let result = []
//     // let count = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 20){
//             result.push(arr[i])
//             // count++
//         }
//     }
//     return result
// }
// console.log(largestNumber([5,10,15,20,25,30]));

// console.log(4 % 2 === 0);

//! new arr using only even numbers

// let numbers = ;

// function even(num){
//     let result = []

//     for(let i = 0; i < num.length; i++){
//         if(num[i] % 2 === 0){
//             result.push(num[i])
//         }
//     }
//     return result
// }
// console.log(even([5, 12, 8, 20, 3, 15]));

//! count the numbers

// function countNUmbers(arr){
//     let count = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 10){
//             count++
//         }
//     }
//     return count
// }
// console.log(countNUmbers([10, 15, 10, 20, 15, 30, 10]));

//! sum of number in an aray

// function sumofArr(num){
//     let sum = 0

//     for(let i = 0; i < num.length; i++){
//         sum = sum + num[i]
//     }
//     return sum
// }
// console.log(sumofArr([10, 20, 30, 40, 50]));

//! sum of even numbers
// function sumofEven(arr){
//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumofEven([10, 15, 20, 25, 30, 35]));

//! second largest

// function secondLargest(arr){
//     let largest = 0
//     let secondLargest = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest
//             largest = arr[i]
            
//         }
//     }
//     return secondLargest
// }
// console.log(secondLargest([10, 15, 20, 25, 30, 35, 40]));

// function secLargest(arr){
//     let largest = arr[0]
//     let secondlargest = arr[1]
    

//     for(let i = 2; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondlargest = largest
//         }
//         else if(arr[i] > secondlargest){
//             largest = secondlargest
//         }
//     }
//     return secondlargest
// }
// console.log(secLargest([20, 10, 15]));
