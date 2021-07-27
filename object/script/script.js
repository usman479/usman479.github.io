// OBJECTS 1

let itemsArray = [
  { name: 'juice', price: 50, quantity: 3 },
  { name: 'cookie', price: 30, quantity: 9 },
  { name: 'shirt', price: 880, quantity: 1 },
  { name: 'pen', price: 100, quantity: 2 }
];

let juice = itemsArray[0].price * itemsArray[0].quantity;
let cookie = itemsArray[1].price * itemsArray[1].quantity;
let shirt = itemsArray[2].price * itemsArray[2].quantity;
let pen = itemsArray[3].price * itemsArray[3].quantity;

document.write("Total price of 'juice' is : " + juice + "<br> <br>");
document.write("Total price of 'cookie' is : " + cookie + "<br> <br>");
document.write("Total price of 'shirt' is : " + shirt + "<br> <br>");
document.write("Total price of 'pen' is : " + pen + "<br> <br>");
document.write("Sum of all the items is : " + (juice + cookie + shirt + pen));


