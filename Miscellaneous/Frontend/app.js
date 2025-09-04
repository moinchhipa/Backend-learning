// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hi, i am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     super(name, age); //parent class constructor is being called
//     this.marks = marks;
//   }
// }

// let stu1 = new Student("moin", 19, 98);

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age); //parent class constructor is being called
//     this.subject = subject;
//   }
// }

// let tea1 = new Teacher("aavej", 28, "Maths");

class Mammal { //base class /peranet class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { //child class
    constructor(name) {
        super(name); //parent class constructor is being called
    }
    bark() {
        console.log("wooff..")
    }
}

class Cat extends Mammal { //child class
    constructor(name) {
        super(name); //parent class constructor is being called
    }
    bark() {
        console.log("meow..")
    }
}