import Item from "./itemclass.js";

class TV extends Item {
  constructor(make, model, size, price, qty) {
    super(price, qty);
    this.name = "TV";
    this.model = model;
    this.make = make;
    this.size = size;
    this.price = price;
    this.qty = qty;
  }
  getModel() {
    return this.model;
  }
  getMake() {
    return this.make;
  }
  getSize() {
    return this.size;
  }
  priceWithTax() {
    return this.price * this.qty + this.tax();
  }
  static getPrice() {
    return this.price;
  }
  static getQty() {
    return this.getQty();
  }
  tax() {
    let tax = 0.0625;
    return this.price * tax;
  }
  getTax() {
    return `$${this.tax().toFixed(2)}`;
  }
  getInvoice() {
    return `\$${parseFloat(this.priceWithTax()).toFixed(2)}`;
  }
  setModel() {
    this.model = model;
  }
  setMake() {
    this.make = make;
  }
  setSize() {
    this.size = size;
  }
  setPrice() {
    this.price = price;
  }
  setQty() {
    this.qty = qty;
  }
  display() {
    return `Name: ${
      this.name
    } || Make: ${this.getMake()} || Model: ${this.getModel()} Size: ${this.getSize()} || Price: ${this.getPrice()} + Tax: ${this.getTax()} || Quantity: ${this.getQty()} || Total Price: ${this.getInvoice()}`;
  }
}

let tv1 = new TV("Samsung", "Q900", '55"', 2499, 1);

console.log(`${tv1.getName()} extended from Item class`);
console.log(tv1.getMake());
console.log(tv1.getModel());
console.log(`${tv1.priceWithTax()} extended from Item class`);
console.log(`${tv1.getQty()} extended from Item class`);
console.log(tv1.getTax());
console.log(tv1.getInvoice());
console.log(tv1.display());
