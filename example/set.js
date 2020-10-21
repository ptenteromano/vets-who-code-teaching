class MySet {
  constructor(arr) {
    this.set = this.removeDuplicates(arr);
  }

  getSet() {
    return this.set;
  }

  removeDuplicates(arr) {
    const map = {};
    const set = [];

    for (const idx in arr) {
      const value = arr[idx];

      if (!map[value]) {
        map[value] = true;

        set.push(value);
      }
    }

    this.map = map;
    return set;
  }

  addToSet(value) {
    if (this.map[value]) return;

    this.map[value] = true;

    this.set.push(value);

    this.print();
  }

  removeFromSet(value) {
    if (!this.map[value]) return;

    delete this.map[value];

    this.set = this.set.filter((setVal) => setVal !== value);

    this.print();
  }

  // DOES NOT MANIPULATE CLASS'S SET
  union(otherSet) {
    if (otherSet && otherSet.className === "SET") {
      const newArr = this.set.concat(otherSet.getSet());

      return new MySet(newArr);
    }

    throw new Error("Must supply another class of type: MySet");
  }

  // DOES NOT MANIPULATE CLASS'S SET
  intersection(otherSet) {
    if (otherSet && otherSet.className === "SET") {
      const newArr = [];

      const setToIntesect = otherSet.getSet();

      for (const idx in setToIntesect) {
        const value = setToIntesect[idx];

        if (this.map[value]) newArr.push(value);
      }

      return new MySet(newArr);
    }

    throw new Error("Must supply another class of type: MySet");
  }

  clearSet() {
    this.set = [];
    this.map = [];
  }

  print() {
    console.log(`{ ${this.getSet()} }`);
  }

  className = "SET";
}

// Use the set

const arr = [5, 3, 5, 2, 2, 2, 8];

const setA = new MySet(arr);

setA.print();

setA.removeFromSet(5);

setA.addToSet(22);
setA.addToSet(22);

console.log("--------");
console.log("--------");

const setB = new MySet([1, 2, 3, 4]);

const unionSet = setA.union(setB);
const intersectSet  = setA.intersection(setB);

unionSet.print();
intersectSet.print();

const gonnaError = setA.intersection([1,2]);
