/* 
Map / Hash
Think of an object-literal in JS. It has a Key and that key reveals a Value Key --> Value Think of an array... what’s the key?... the index! What else can our Map class do? Add, remove, etc?
*/

class Map {
  constructor([{ key: val }]) {
    this.key = [{ key }];
    this.val = [{ val }];
  }
  getMap() {
    return this.key, this.val;
  }
  setMap([{ key: val }]) {
    console.log([{ key, val }]);

    this.key.push([{key}]);
    this.val.push([{val}]);
  }
  search() {}
}

let m = new Map("Jim", "Hoffa");
m.setMap([{ jim: "hoffa" }]);
console.log(m.getMap());
