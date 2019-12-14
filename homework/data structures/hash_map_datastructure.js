/* 
Map / Hash
Think of an object-literal in JS. It has a Key and that key reveals a Value Key --> Value Think of an array... what’s the key?... the index! What else can our Map class do? Add, remove, etc?
*/

class MapClass {
  constructor() {
    this.key = new Array();
    this.val = new Object();
  }
  /* Add new items to the Map */
  setMap(key, val) {
    if (this.val[key] == null) {
      this.key.push(key);
    }
    this.val[key] = val;
    //console.log  (`{key: ${key}, value: ${val}}`);
  }
  /* Gets items from the Map */
  getMap(key) {
    if (this.isEmpty(key))
      return `Nothing exists yet. Use {variable}.setKey(key,value) to create one`;
    else if (this.key.includes(key)) {
      return `"${key}" exists`;
    } else return `"${key}"...could not be found`;
  }

  /* Deletes keys from the map and deletes the Object as well */
  deleteKey(key) {
    delete this.val[key];
  }
  /* Iterates through the Map items and prints all to console */
  printAll() {
    let len = this.key.length;
    let entrys = [this.key];
    let values = [this.val];
    for (let i = 0; i < len; i++) {
      entrys[i] = {
        key: this.key[i],
        value: this.val[i]
      };
    }
    return entrys, values;
  }
  //Did someone put nothing in there? This will check and return a message 
  isEmpty(key) {
    return this.key.length == 0;
  }
}
let m = new MapClass();
m.setMap("Fname", "Steve");
m.setMap("Lname", "Clark");
m.setMap("Sex", "Male");
m.setMap("Prior Service", "Y");
m.setMap("Branch", "Marine Corps");
m.setMap("Last Rank", "SSgt");

console.log(m.printAll());
m.deleteKey("Branch");
console.log(m.printAll());
console.log(m.getMap("Fname"));
console.log(m.getMap("first"));
