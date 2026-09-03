//! largest element in an array

// function largestArray(array){
//     let largest = 0

//     for(let i = 0; i < array.length; i++){
//         if(array[i] > largest ){
//              largest = array[i] 
//         }
//     }
//     return largest
// }
// console.log(largestArray( [10, 25, 7, 40, 18]));

//! second largest element in an array

// function secLargest(array){
//     let largest = 0
//     let secondLargest = 0

//     for(let i = 0; i < array.length; i++){
//         if(array[i] > largest){
//             secondLargest = largest
//             largest = array[i]
//         }
//     }
//     return secondLargest
// }
// console.log(secLargest([10, 25, 7, 40, 18]));

//! reverse an array

// function reverseArr(array){
//     let reverse = []

//     for(let i = array.length - 1; i >= 0; i--){
//         reverse.push(array[i])
//     }
//     return reverse
// }
// console.log(reverseArr([1,2,3,4]));


//! remove duplicate element in an array

// function Duplicate(array){
//     let result = []

//     for(let i = 0; i < array.length; i++){
//         if(!result.includes(array[i]))
//             result.push(array[i])
//     }
//     return result
// }
// console.log(Duplicate( [1, 2, 2, 3, 4, 4, 5]));


//! frequency of number

// function frequency(array){
    
//     for(let i = 0; i < array.length; i++){
//         let current = array[i]
//         let count = 0
//         for(let j = 0; j < array.length; j++){
//             if(current === array[j]){
//                 count++
//             }
//         }
//         return current
//     }
// }
// console.log(frequency([[1, 2, 2, 3, 1, 2]]));

//! find the missing number

// function missingNumber(array){
//     let Actualsum = 0
//     let expectedSum = 0

//     for(let i = 1; i < array.length + 1; i++){
//         expectedSum += i

//     }
//     for(let j = 0; j < array.length; j++){
//          Actualsum += array[j]
        
//     }
//     return expectedSum - Actualsum
// }
// console.log(missingNumber([1,2,3,5]));


//! find the missing number
// function missingNumber(array) {
//     let actualSum = 0
//     let expectedSum = 0

//     for(let i = 1; i <= array.length + 1; i++){
//         expectedSum += i
//     }

//     for(let j = 0; j < array.length; j++){
//         actualSum += array[j]
//     }

//     return expectedSum - actualSum
// }

// console.log(missingNumber([1, 2, 3, 5]))

//! first-non repeting number

//  function nonRepeting(array){
    
//     for(let i = 0; i < array.length; i++){
//         let current = array[i]
//         let count = 0
        
//         for(let j = 0; j < array.length; j++){
//             if(current === array[j]){
//                 count++
//             }
//         }
//         if(count === 1){
//             return current
//         }
//     }
//  }
//  console.log(nonRepeting([1, 2, 2, 3, 1, 4]));;
 
//!

function commonelement(arr1, arr2){
    let result = []

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i].includes()){
            result.push(arr1[i])
        }else{
            result.push(arr2[i])
        }
    }
    return result
}
console.log(commonelement(
    [10, 20, 30, 40, 50],
    [30, 40, 50, 60, 70]
));
