/////////////////////////////////// Coding Challenge #1 ////////////////////////////////

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

4. Create 2 car objects and expriment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

*/

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;

  // THE BEST METHOD IS TO USE PROTOTYPAL INHERITANCE => It would be terrible if we have many many car objects!
  // this.accelerate = function () {
  //   this.speed += 10;
  // };
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

// PROTOTYPAL INHERITANCE:
Car.prototype.accelerate = function () {
  console.log((this.speed += 10)); // this keyword points to the object, on which the method will be called! => Object would be the Car here => BMW and Mercedes!
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

// PROTOTYPAL INHERITANCE:
Car.prototype.brake = function () {
  console.log((this.speed -= 5));
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Create 2 car objects and expriment with calling 'accelerate' and 'brake' multiple times on each of them.

console.log("-------------BMW------------------");
const BMW = new Car("BMW", 120);
BMW.accelerate(); // 130
BMW.accelerate(); // 140
BMW.brake(); // 135
BMW.accelerate(); // 145

console.log("-------------Mercedes-------------");
const Mercedes = new Car("Mercedes", 95);
Mercedes.accelerate(); // 105
Mercedes.brake(); // 100
Mercedes.accelerate(); // 110
Mercedes.accelerate(); // 120
