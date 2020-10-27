// Data structure
// An object with certain properties, that interact with data, and are only accessible through interfacing with the data structure

// Stack, Queue, Object*****

// Our ownSet
// What else does a Set DAta Structure do??
// Add an elemetn
// Remove an element

class MySet {
  constructor(arr) {
    this.set = this.removeDuplicates(arr);
  }

  // Getter
  getSet() {
    return this.set;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  // Creating the set
  removeDuplicates(arr) {
    const map = {}; // Plain old js object

    const set = [];

    for (const idx in arr) {
      const value = arr[idx];

      if (!map[value]) {
        map[value] = true;

        set.push(value);
      }
    }

    this.map = map; // O(1)
    return set;
  }

  // Add value if not already in set
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

  // We want "otherSet" to be an instance of MySet

  // Union -- combine sets, remove duplicates again
  // DOES NOT MANIPULATE THIS INSTANCE'S SET
  union(otherSet) {
    if (otherSet && otherSet.className === "MY_SET") {
      const newArr = this.set.concat(otherSet.getSet());

      return new MySet(newArr);
    }

    throw new Error("Must supply another class of type: MySet");
  }

  // Intersection -- combine sets, prune all non-duplicates
  // DOES NOT MANIPULATE THIS INSTANCE'S SET
  intersection(otherSet) {
    if (otherSet && otherSet.className === "MY_SET") {
      const newArr = [];

      const setToIntersect = otherSet.getSet();

      for (const idx in setToIntersect) {
        const value = setToIntersect[idx];

        if (this.map[value]) newArr.push(value);
      }

      return new MySet(newArr);
    }

    throw new Error("Must supply another class of type: MySet");
  }

  clearSet() {
    this.map = {}; // O(1) mapping
    this.set = [];
  }

  print() {
    console.log(`{ ${this.getSet()} }`);
  }

  className = "MY_SET";
}

// --------------------

const someArr = [1, 1, 2, 3, 3, 2, 8];

const setA = new MySet(someArr);

setA.print();
setA.addToSet(100);
setA.removeFromSet(8);

const setB = new MySet([1, 4, 5, 100]);

console.log("----------------");
setB.print();

const unionSet = setA.union(setB);
const intersectionSet = setB.intersection(setA);

intersectionSet.print();

setA.clearSet();
setA.print();
