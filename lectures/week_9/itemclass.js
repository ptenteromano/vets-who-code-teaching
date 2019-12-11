/* 
Assignment:

Design your own Class, it can be anything (Player, Car, Home, Account)
Build out all your own methods and variables
Instantiate it into an Object
Show off all your object’s methods!
Bonus:

Research “inheritance”, and nested Objects
I.E., both Car and Plane objects can inherit from Vehicle
I.E., a Bank can have many nested BankAccounts and Users
Try to use them in your Classes!
 */

class Item {
  constructor(name, type, price, qty) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.qty = qty;
  }
  getName() {
    return this.name;
  }
  getType() {
    return this.type;
  }
  getPrice() {
    return this.price;
  }
  getQty() {
    return this.qty;
  }
  setName(name) {
    this.name = name;
  }
  setType(type) {
    this.type = type;
  }
  setPrice(price) {
    this.price = price;
  }
  setQty(qty) {
    this.qty = qty;
  }
  getInvoice() {
    return `\$${parseFloat(this.price * this.qty).toFixed(2)}`;
  }
  displayAll() {
    console.log(
      `Name: ${this.name} || Type: ${this.type} || Price: ${this.price} || Quantity: ${this.qty}`
    );
  }
}
let newItem = new Item("Widget", "Thingy", 7.99, 2);
console.log(newItem.getName());
console.log(newItem.getType());
console.log(newItem.getPrice());
console.log(newItem.getQty());
console.log(newItem.getInvoice());
newItem.displayAll();
newItem.setPrice(8);
console.log(newItem.getInvoice());
newItem.displayAll();
