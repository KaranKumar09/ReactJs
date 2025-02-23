// let numbers = [1,3,5,7,9];
// function double(number){
//     return number * 2;
// }
// let doubled_numbers = numbers.map(double);
// console.log(doubled_numbers);

// let products = [
//     {name: "Laptop",price: 1000},
//     {name:"Phone",price: 2000},
//     {name:"Tablet",price: 3000},
// ];
// function increasePrice(product){
//     return{
//         ...product,
//         price: product.price * 1.1
//     };
// }
// let updatedProducts = products.map(increasePrice);
// console.log(updatedProducts);

// let emptyArray = Array(5);
// console.log(emptyArray);

// let filledArray = Array(3).fill(0);
// console.log(filledArray);

// const people = [
//     {name: 'Alice',age: 25},
//     {name: 'Bob',age: 30},
//     {name: 'Charlie',age: 35}
// ];

// const names = people.map(person => person.name);
// console.log(names);


//Array of objects representing people 
// const people1 = [
//     {name: 'Alice',age: 25},
//     {name: 'Bob',age: 30},
//     {name: 'Charlie',age: 35}
// ];
// //using .map() to extract the name property from each object
// const names1 = people1.map(person => person.age);
// console.log(names1);

// const people2 = [
//     {name: 'Alice',age: 25},
//     {name: 'Bob',age: 30},
//     {name: 'Charlie',age: 35}
// ];

// const ages1 = people2.map(function(item) {
//     return this.age;
// }, this);

// console.log(ages1);


//shallow copying: in objects the rest operator performs 
// const obj = {a:1,b:{c:2}};
// const {a,...rest} = obj;
// rest.b.c = 3;
// console.log(obj.b.c);

// const numbers = [1,2,3,12,3];
// const index = numbers.findIndex(n=>n>10);
// console.log(index);


// const numbers1 = [1,2,3,12,3];
// const hasEven = numbers1.some(n=>n % 2 == 0);
// console.log(hasEven);

// function calculateTotalPrice(...prices) {
//     let totalPrice = 0;
//     for (let price of prices) {
//         totalPrice += price;
//     }
//     return totalPrice;
// }  

// console.log(calculateTotalPrice(10, 20, 30)); 
// console.log(calculateTotalPrice(5, 10, 15, 20)); 

function concatenateStrings(...strings){
    let str ="";
    for(let string of strings){
        str += string;
    }
    return str;
}
console.log(concatenateStrings("Hello","World"));

function concatenateStrings(...strings) {
    // If no strings are provided, return an empty string
    if (strings.length === 0) {
        return '';
    }
    
    // Concatenate the strings with a space between each word
    return strings.join(' ');
}

// Example usage:
console.log(concatenateStrings("Hello", "world!")); // Output: "Hello world!"
console.log(concatenateStrings("This", "is", "a", "test.")); // Output: "This is a test."
console.log(concatenateStrings()); // Output: ""
