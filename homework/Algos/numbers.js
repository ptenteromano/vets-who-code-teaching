/* 
Design your own class / function / etc. IE., Class called NumberSystem() It should be able to take in a integer or string IE., 134, “F8A5”, “1011", etc. It should convert numbers from binary to decimal, and hex to decimal. Look up how to convert decimal into hex and decimal to binary, add that to your class / program.
*/
class NumberSystem {
  decToHex(num) {
    this.num = num;
    this.result = []; //Going to store the results of the remainder here
    this.hex = "0123456789ABCDEF".split(""); //An array of hexadecimal items to map to the result
    while (this.num > 0) {
      this.rem = Math.floor(this.num % 16);
      this.num = Math.floor(this.num / 16);
      this.result.push(this.rem); //The results of finding the remainder
    }
    //Have to reverse the array to have most significant to least significant digits
    this.result.reverse();
    this.final = this.result
      .map(i => this.hex[i]) //Map the results to the hex array to output the numbers 10-15 to A-F
      .join("") //After mapping, join to make a string of numbers
      .replace(/^0+/, ""); //Leading zeros are not represented and stripped
    return this.final;
  }
  decToBin(num) {
    this.num = num;
    this.result = [];
    //console.log(this.num);
    while (this.num > 0) {
      this.rem = Math.floor(this.num % 2);
      this.num = Math.floor(this.num / 2);
      this.result.push(this.rem);
    }
    this.final = this.result.reverse().join("");
    return this.final;
  }
  binToDec(num) {
    this.num = num;
    this.numArr = this.num
      .toString()
      .split("")
      .map(i => parseInt(i))
      .reverse();
    //console.log(this.numArr); //1100100
    this.result = [];
    for (let i = 0; i < this.numArr.length; i++) {
      this.numArr[i] = this.numArr[i] * Math.pow(2, i);
      this.result.push(this.numArr[i]);
    }
    this.final = this.result.reduce((acc, curr) => acc + curr);
    return this.final;
  }
  binToHex(num) {
    this.num = num;
    this.binToDec(this.num);
    return this.decToHex(this.final);
  }
  hexToDec(num) {
    this.num = num.toUpperCase();
    this.result = 0;
    this.digit;
    for (var i = 0; i < this.num.length; i++) {
      this.digit = "0123456789ABCDEF".indexOf(this.num[i]);
      this.result = this.result * 16 + this.digit;
    }
    return this.result;
  }
  hexToBin(num) {
    this.num = num;
    this.hexToDec(this.num);
    return this.decToBin(this.result);
  }
  p(f) {
    this.f = f;
    console.log(this.f);
  }
}
//decToHex(num)
let d2h = new NumberSystem();
console.log(`Decimal to Hexadecimal`);
d2h.p(`Decimal: 100 to Hex:${d2h.decToHex(100)}`);
d2h.p(`Decimal: 479 to Hex:${d2h.decToHex(479)}`);
d2h.p(`Decimal: 101 to Hex:${d2h.decToHex(101)}`);
d2h.p(`Decimal: 300 to Hex:${d2h.decToHex(300)}`);
console.log(`-------------`);
//decToBin(num)
let d2B = new NumberSystem();
console.log(`Decimal to Binary`);
d2B.p(`Decimal:100 to Binary:${d2B.decToBin(100)}`);
d2B.p(`Decimal:479 to Binary:${d2B.decToBin(479)}`);
d2B.p(`Decimal:101 to Binary:${d2B.decToBin(101)}`);
d2B.p(`Decimal:300 to Binary:${d2B.decToBin(300)}`);
console.log(`-------------`);
//binToDec(num)
let b2d = new NumberSystem();
console.log(`Binary to Decimal`);
b2d.p(`Binary:01111101 to Decimal:${b2d.binToDec(01111101)}`);
b2d.p(`Binary:11111101 to Decimal:${b2d.binToDec(11111101)}`);
b2d.p(`Binary:11010000 to Decimal:${b2d.binToDec(11010000)}`);
b2d.p(`Binary:11011100 to Decimal:${b2d.binToDec(11011100)}`);
console.log(`-------------`);
//binToHex(num)
let b2h = new NumberSystem();
console.log(`Binary to Hexadecimal`);
b2h.p(`Binary:01111101 to Hexadecimal:${b2h.binToHex(01111101)}`);
b2h.p(`Binary:11111101 to Hexadecimal:${b2h.binToHex(11111101)}`);
b2h.p(`Binary:11010000 to Hexadecimal:${b2h.binToHex(11010000)}`);
b2h.p(`Binary:11011100 to Hexadecimal:${b2h.binToHex(11011100)}`);
console.log(`-------------`);
//hexToDec(num)
let h2d = new NumberSystem();
console.log(`Hexadecimal to Decimal`);
h2d.p(`Hexadecimal:"141" to Decimal:${h2d.hexToDec("141")}`);
h2d.p(`Hexadecimal:"FD" to Decimal:${h2d.hexToDec("FD")}`);
h2d.p(`Hexadecimal:"D0" to Decimal:${h2d.hexToDec("D0")}`);
h2d.p(`Hexadecimal:"DC" to Decimal:${h2d.hexToDec("DC")}`);
console.log(`-------------`);
//hexToBin(num)
let h2b = new NumberSystem();
console.log(`Hexadecimal to Binary`);
h2b.p(`Hexadecimal:"141" to Binary:${h2b.hexToBin("141")}`);
h2b.p(`Hexadecimal:"FD" to  Binary:$${h2b.hexToBin("FD")}`);
h2b.p(`Hexadecimal:"D0" to  Binary:$${h2b.hexToBin("D0")}`);
h2b.p(`Hexadecimal:"DC" to  Binary:$${h2b.hexToBin("DC")}`);
console.log(`-------------`);
