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

// console.log(usman);
// console.log(ali);
// console.log(mehwish);
document.write("First function made from constructor <br><br>")
for(let key in usman) {
  document.write(key + " : " + usman[key] + "<br><br>");
}
document.write("Second function made from constructor <br><br>")
for(let key in ali) {
  document.write(key + " : " + ali[key] + "<br><br>");
}
document.write("Third function made from constructor <br><br>")
for(let key in mehwish) {
  document.write(key + " : " + mehwish[key] + "<br><br>");
}