// Constructor
// Only called once - when instantiated
//

class Car {
  constructor(name, color, type, isAutomatic, isFourWheel, cylinders) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.isAutomatic = isAutomatic;
    this.isFourWheel = isFourWheel;
    this.cylinders = cylinders;
  }

  // Move... then stop
  moveThenStop() {
    console.log("MOVING FAST");

    this.stop();
  }

  stop() {
    console.log("...");
    console.log("Car stopped!");
  }

  printDetails() {
    console.log();
    console.log(`Name: ${this.name}`);
    console.log(`Color: ${this.color}`);
    console.log(`Type: ${this.type}`);
    console.log(`Wheel drive: ${this.isAutomatic ? "Automatic" : "Manual"}`);
    console.log(`Drive: ${this.isFourWheel ? "Four wheel" : "Two wheel"}`);
    console.log(`Engine: ${"V" + this.cylinders.toString()}`);
    console.log();
  }

  withdraw() {

  }

  deposit() {

  }
}

class Employee {

}

class Bank {
  constructor(...) {
    this.allEmployees = [emp1, ]
  }

  // Setter
  setEmployeeCount(numEmployees) {
    this.numEmployees = numEmployees
  }

  addEmployee(employee) {
    this.allEmployees.push(employee)
    this.numEmployees++;
  }

  fireEmployee(employeeId) {
    // search the array of employees
    // remove that employee
  }

  // Getter
  getEmployeeCount() {
    return this.numEmployees
  }
}

const jpm = new Bank(..)
const philsBank = new Bank(..)


// ------

const sportsCar = new Car("Sports car", "Blue", "Coupe", false, false, 8);
const blueSuv = new Car("Big Car", "Red", "SUV", true, true, 6);

// const func = () => {
//   const num = 100;
// };

sportsCar.printDetails();
sportsCar.moveThenStop();


sportsCar // encapsulation
