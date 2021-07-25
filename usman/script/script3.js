// OBJECTS 3

function Plan (name, cast, age, gender) {
  this.name = name
  this.cast = cast
  this.age = age
  this.gender = gender
}

let usman = new Plan("Usman", "Khan", 20, "m");
let ali = new Plan("Ali", "Khan", 19, "m");
let mehwish = new Plan("Mehwish", "Jutt", 25, "f");

console.log(usman);
console.log(ali);
console.log(mehwish);