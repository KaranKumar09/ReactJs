
// class gfg{
//     constructor(name,estd,rank){
//         this.n=name;
//         this.e=estd;
//         this.r= rank;
//     }
//     decreaserank(){
//         this.r -=1;
//     }
// }
// const black = new gfg("Hello",2009,43);
// black.decreaserank();
// console.log(black.r);

// class Rectangle {
//     constructor(length, breadth) {
//       this.l = length;
//       this.b = breadth;
//     }
//     area() {
//       return this.l * this.b;
//     }
//   }
  
//   const area2 = new Rectangle(32, 40);
//   const area3 = new Rectangle(5, 12);
  
//   console.log(area2.area()); 
//   console.log(area3.area()); 
// class car{
//     constructor(g){
//         this.character = g;

//     }
// }
// class black extends car{
//     disp(){
//         console.log("No.of Characters: "+this.character);
//     }
// }
// var obj = new black(13);
// obj.disp();


class Animal{
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    describe(){
        return `${this.name} is a ${this.type}`;
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name,"Dog");
        this.breed = breed;
    }
    bark(){
        return`${this.name} says woof`; 
    }
}
const myDog = new Dog("Buddy","Golden Retriver");
console.log(myDog.describe());
console.log(myDog.bark());
                