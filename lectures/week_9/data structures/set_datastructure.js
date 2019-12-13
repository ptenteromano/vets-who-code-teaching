/* 
Set
A set is just an unordered list (like an array) - but it has NO duplicates! Think of a math set {1, 2, 3}, etc.Z
*/

class SetDataStruct {
  //new constructor
  constructor(...arr1) {
    if (arr1 === null) return this.isEmpty;
    this.arr1 = this.removeDupes(arr1);
  }

  //remove duplicates in a set using filter method
  removeDupes(arr) {
    arr = arr.filter((el, pos) => arr.indexOf(el) == pos);
    return arr;
  }

  //If you want to add numbers to a set, this is where you get it done
  addToSet(...arrNum) {
    //for loop to check for 'strings' or other non-numbers. If there are it stops the function
    for (let i = 0; i < arrNum.length; i++) {
      if (typeof arrNum[i] != "number") {
        console.error(`You must only provide numbers`);
        break;
      } else {
        this.arr1.push(arrNum[i]);
        //flattens the array
        this.arr1 = this.arr1.reduce((a, b) => a.concat(b), []);
        //removes duplicates using removeDupes func
        this.arr1 = this.removeDupes(this.arr1);
      }
    }
    return this.arr1;
  }

  /* A Union is any region including either A or B.
    Basically I combine both arrays, remove duplicates and display */
  union(...another_set) {
    if (another_set === null) return this.isEmpty;
    for (let i = 0; i < another_set.length; i++) {
      if (typeof another_set[i] != "number") {
        console.error(`You must only provide numbers`);
        break;
      } else {
        this.arr2 = [];
        this.arr2.push(another_set);
        this.arr2 = this.arr2.reduce((a, b) => a.concat(b), []);
        this.arr2 = this.removeDupes(this.arr2);
        this.union = `The union of [${this.arr2}] & [${this.arr1}] is\n`;
        this.arr1.push(this.arr2[i]);
        this.arr1 = this.arr1.reduce((a, b) => a.concat(b), []);
        this.newArr = this.removeDupes(this.arr1);
      }
    }
    return `${this.union}[${this.newArr}]`;
  }
  /* An Intersection is any region including both A and B. 
  In this function I combine the two arrays, then filter anything out 
  that is duplicated and then display everything else.   */
  intersection(...another_set) {
    if (another_set === null) return this.isEmpty;
    for (let i = 0; i < another_set.length; i++) {
      if (typeof another_set[i] != "number") {
        console.error(`You must only provide numbers`);
        break;
      } else {
        this.intersection = [];
        this.intersection.push(another_set);
        this.intersection = this.intersection.reduce((a, b) => a.concat(b), []);
        this.intersection = this.removeDupes(this.intersection);
        this.intersectionNoDupes = this.intersection;
        this.intersection.filter(value => this.arr1.includes(value));
      }
    }
    console.log(`-----------------------------`);
    return `The intersection of [${this.intersectionNoDupes}] & [${this.arr1}] is\n[${this.intersection}].`;
  }
  //Did someone put nothing in there? This will check and return an empty array []
  isEmpty(arr) {
    return this.arr1.length === 0;
  }
  //print function because it's easier to type test.p(function) that typing console.log 500 times
  p(f){
    console.log(f);
  }
}
let test = new SetDataStruct(5, 4, 3, 2, 1, 1);
test.p(test.addToSet(10, 20));
test.p(test.union(1, 2, 3, 4, 5, 6, 9));
test.p(test.intersection(100, 1, 2, 3, 900, 900, 10, 20));
test.p(test.addToSet(109, 200, "dave", "ben"));
/* 
[ 5, 4, 3, 2, 1, 10, 20 ]
The union of [1,2,3,4,5,6,9] & [5,4,3,2,1,10,20,1,2,3,4,5,6] is
[5,4,3,2,1,10,20,6,9]
-----------------------------
The intersection of [100,1,2,3,900,10,20] & [5,4,3,2,1,10,20,1,2,3,4,5,6,9] is
[100,1,2,3,900,10,20].
[ 5, 4, 3, 2, 1, 10, 20, 6, 9, 109, 200 ]
You must only provide numbers */