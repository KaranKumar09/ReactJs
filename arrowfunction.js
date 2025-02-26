function Person(){
    this.name = 'Jack';
    this.age = 25;
    this.sayAge = function(){
        console.log(this.age);

        let innerFunc = () => {
            var age= 35;
            console.log(this.age);
        }
        innerFunc();
     }
}
const x = new Person();
x.sayAge();