class Bank {
  // ...

  // setter
  setEmployeeCount(n) {
    this.num_employees = n;
  }

  // getter
  getEmployeeCount() {
    return this.num_employees;
  }
}

// class components
class Header {
  // do whaterver
}

class Article {

}

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  toString() {
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
  }

  print() {
    console.log(this.toString());
  }

}

const chicken_breast = new Food("Chicken Breast", 26, 0, 3.5);
const bread = new Food("Bread", 0, 1000, 6);

chicken_breast.skin = "brown";

bread.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.skin); // 26 (LINE A)

// public or private
let a;

console.log(a);

// Use Case for classes?
