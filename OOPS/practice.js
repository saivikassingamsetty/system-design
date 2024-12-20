//Problem-1
console.log("---------- Problem 1 ---------");
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  getDetails() {
    console.log(
      `This is ${this.name} of age ${this.age}, lives in ${this.country}`
    );
  }
}

const personA = new Person("Sai", 23, "India");
const personB = new Person("Vikas", 23, "India");
personA.getDetails();
personB.getDetails();

//Problem-2
console.log("---------- Problem 2 ---------");
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }

  getPerimeter() {
    return 2 * (this.height + this.width);
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.getArea(), rect.getPerimeter());

//Problem-3
console.log("---------- Problem 3 ---------");
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    console.log(this.make, this.model, this.year);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  getDetails() {
    super.getDetails();
    console.log(`car has ${this.doors} doors`);
  }
}

const myCar = new Car("Tata", "Punch", 2024, 4);
myCar.getDetails();

//Problem-4
console.log("---------- Problem 4 ---------");
