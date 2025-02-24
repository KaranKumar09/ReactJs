// class blcak{
//     doPrint(){
//         console.log("This doprint() form parent called");
//     }
// }
// class gfg extends blcak{
//     doPrint(){
//         super.doPrint();
//         console.log("This doprint() is printing a string.");
//     }
// }
// var obj = new gfg();
// obj.doPrint();

// class Animal {
//     constructor(name,type){
//         this.name = name;
//         this.type = type;
//     }
//     describe(){
//         return `${this.name} is a ${this.type}`;
//     }

// }
// const lion = new Animal("Lion","Wild animal");
// console.log(lion.describe());
                                
// class Car {
//     constructor(make, model, year, available = true) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//       this.available = available;
//     }
  
//     isAvailable() {
//       return this.available ? `The ${this.year} ${this.make} ${this.model} is available.` : `The ${this.year} ${this.make} ${this.model} is not available.`;
//     }
//   }
//   const myCar = new Car("Toyota", "Corolla", 2020);
//   console.log(myCar.isAvailable());  
//   myCar.available = false;
//   console.log(myCar.isAvailable()); 


// create a class name car and display the information of car
// class Car {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     displayInfo() {
//         console.log(`Car Information:`);
//         console.log(`Make: ${this.make}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);
//         console.log(`Color: ${this.color}`);
//     }
// }
// const myCar = new Car('Toyota', 'Corolla', 2021, 'Blue');
// myCar.displayInfo();


// create a lambda function which is finding the area of cylinder in javascript
// const cylinderArea = (radius, height) => {
//     const pi = Math.PI;
//     return 2 * pi * radius * (radius + height);
// };
// const radius = 5; 
// const height = 10; 
// const area = cylinderArea(radius, height);
// console.log(`The surface area of the cylinder is: ${area.toFixed(2)} square units`);


// Lambda function to calculate the average of five marks
// const calculateAverage = (marks) => {
//     if (marks.length !== 5) {
//       throw new Error('Exactly five marks are required');
//     }
//     const sum = marks.reduce((acc, mark) => acc + mark, 0);
//     return sum / marks.length;
//   };
//   const marks = [85, 90, 78, 92, 88];
//   const average = calculateAverage(marks);
  
//   console.log(`The average mark is: ${average}`);
// Lambda function to calculate the average of five marks
// const calculateAverage = (a, b, c, d, e) => (a + b + c + d + e) / 5;
// const average = calculateAverage(85, 90, 78, 92, 88);
// console.log(`The average mark is: ${average}`);



// Lambda function to filter even numbers from an array
// const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
// const numbers = [10, 15, 22, 33, 40, 55];
// const evenNumbers = getEvenNumbers(numbers);
// console.log(`Even numbers are: ${evenNumbers}`);

// const gfg = (x,y,z)=>{
//     console.log(x+y+z);
// }
// gfg(20,30,40);

// Literals
// const Book_detail = (author,title) =>{
//         return({a:author,t:title});
//     }
//     console.log(Book_detail("Pankaj","BlackBookReact"));


// let age = 25;
// let city  = "New York";
// let occupation = "software developer";
// let introduction = `I am ${age} years old, having living in ${city} and working as a ${occupation}`;
// console.log(introduction);

// overwrite
// var show = (a,b=200)=>{
//     console.log(a,b);
// }
// show(200,500);


// const regularFunctionExample = {
//     name: 'Regular function',
//     getName: function(){
//         console.log(this.name);
//     }
// };
// regularFunctionExample.getName();

const arrowFunctionExample = {
    name: 'arrow function',
    getName: ()=>{
        console.log(this.name);
    }
};
arrowFunctionExample.getName();