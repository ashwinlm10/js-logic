//! online shoping discount

// function onlineShoping() {
//   let purchase = parseInt(prompt("enter the discount"));

//   if (purchase >= 5000) {
//     console.log("dear customer you have earned 20% discount");
//   } else if (purchase >= 2000) {
//     console.log("dear customer you have earned 10% discount");
//   } else {
//     console.log("dear customer you have earned 5% discount");
//   }
// }
// onlineShoping();

//! fizz-buzz

// function fizzbuzz(){

//     let number = parseInt(prompt("enter the number:"))

//     if(number % 3 == 0){
//         console.log("it is a Fizz");
//     }else if(number % 5 == 0){
//         console.log("it is a buzz");
//     }else if(number % 3 == 0 && number % 5 == 0){
//         console.log("it is a FizzBuzz");
//     }else{
//         console.log("invalid");
//     }
// }
// fizzbuzz()

//! objects
// let employee = {
//     name: "Rahul",
//     name1: "abhi",
//     age: 25,
//     salary: 30000

// };
// let key = "name"
// let key1 = "name1"

// console.log(employee.name);
// console.log(employee["salary"]);
// console.log(employee[key1]);

// employee.city = "bangalore"
// console.log(employee);

// let product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "HP"
// };

// // product.price = 55000
// // product.catagery = "Electronics"
// // delete product.brand
// // console.log(product);

// console.log(product.value);

// let brand = {
//     name: "Lenove",
//     model: "LOQ",
//     price: 70000,

//     company() {
//         console.log(`my laptop name is ${this.name} and model is ${this.model} and i buyed at Rs ${this.price}`);
//     }
// }
// brand.company()

// let person1 = {
//     name: "adithya",
//     age: 22,

//     greet(){
//         console.log(this.name);
//     }
// }

// let person2 = {
//     name: "abhishek",
//     age: 21,

//     greet: person1.greet
// }
// person1.greet()

// let person = {
//     name: "Ashwin",

//     greet() {
//         console.log(this.name);
//     }
// };

// let fn = person.greet;

// fn();

// let person = {
//     name: "ashiwn",
//     age: 55,

//     greet:() => {
//         console.log(this.name);

//     }
// }
// person.greet()

// let person = {
//     name: "Ashwin",

//     greet() {
//         console.log(this.name);
//     }
// };

// let person2 = {
//     name: "Rahul"
// };

// person2.greet = person.greet;

// person2.greet();

// let person = {
//     name: "ashwin"
// }

// function introduce(age, state, district){
//     console.log(this.name);
//     console.log(age);
//     console.log(state);
//     console.log(district);
// }
// introduce.call(person, 23, "karnataka", "shimoga")

// let ob1 = {
//     name: "ashwin",
//     age: 24
// }

// let ob2 = {
//     age: 25
// }

// Object.assign(ob1, ob2)
// console.log(ob1);

//! fetch api

// fetch("https://jsonplaceholder.typicode.com/users")

// //! get the response from the setver and
// .then(response => response.json()) //! why we are using .json means to convert json format to array/object

// //! get actual data
// .then((data) => {
//     console.log(data);
// })

// //! to handle error
// .catch((error) => {
//     console.log(error);

// })

// fetch("https://jsonplaceholder.typicode.com/users")

// //step -1 response
// .then((response => response.json()))

// //step-2 get actual data
// .then((data => {
//     console.log(data);
// }))

// //step-3 error handling
// .catch((error) => {
//     console.log("network-error");
// })

//! async and await using fetch

// async function fetUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("error");
//     }
// }
// fetUsers()

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUser();
