// var months = ["January",
//     "February",
//     "March",
//     "April"];

// months[4] = "May";
// months[5] = "June";


// console.log(months[5]); 

// months.pop();

// months.push("June", "July", "August")


// console.log(months);

// months.shift();
// months.shift();

// console.log(months);

// months.unshift("January", "February");

// console.log(months);

// for (var i = 0; i < months.length; i++) {
//     console.log(months[i] , i);
// }


// months.forEach(function (mon, pon, arr) {
//     console.log(mon, pon, arr);
// })

// console.log(months);

// months.splice(1, 3, "shanu", "manu", "janu");

// console.log(months);

// months.forEach(function (mo , po) {
//     console.log(mo, po)
// })


// console.log(months.slice(1, 4))

// var months = ["january", "february", "march", "april", "may", "june", "july"]

// var enter = prompt("enter a month");

// for (var i = 0; i < months.length; i++) {
//     console.log(months[i], i);
// }

// var found = false

// for (var i = 0; i < months.length; i++) {
//     console.log("Finding in : " + i);
//     if (months[i] === enter) {

//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log("Found");
// }

// var data = undefined;

// console.log(!!data)

// for (var i = 1; i < 6; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(" * ")
//     }
//     document.write(<br>)
// }

// var cityToCheck = prompt("enter your city")
// var cleanestCities = ["karachi", "lahore", "islamabad", "abbotabad"];
// var matchFound = false;

// for (var i = 0; i < 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//       matchFound = true;
//       console.log("your city is cleanest")
//     }
// }

// if (matchFound === false) {
//    console.log("your city is not on the list")
// }


// for (var i = 1; i <= 5; i = i +2) {
//   for (var j = 1; j <= i; j++) {
//       document.write(" * ");
//   }
//   document.write("<br>")
// }

// var table = Number(prompt("enter a number for table"));
// var length = Number(prompt("enter a length"));

// for (var i = 1; i <= length; i++) {
//     console.log(table + " x " + i + " = " + i*table)
// }


// var fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
//     console.log("Element at Index " + i +" is " + fruits[i]);
// }

// for (var i = 0; i <= 20; i += 2) {
//     console.log(i+1);
// }

// BAKERY ITEMS

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]

// var order = prompt("welcome to our bakery. what do you want to order sir?")

// var flag = false;

// for (var i = 0; i < bakery.length; i++) {
//     if (bakery[i] === order) {
//         console.log("Available at Counter " + (i+1))
//         flag = true;
//         break;
//     }

// }

// if (flag === false) {
//     console.log("not available")
// }

// var firstName = ["Muhammad"];
// var lastName = ["Asad", "Ahmed", "Usman"]

// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; j < lastName.length; j++) {
//         console.log(firstName + " " + lastName[j]);
//     }
// }

// TO LOWER CASE

// var cityToCheck = prompt("enter your city name");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "lahore", "islamabad", "abbotabad", "rawalpindi"];
// var flag = false;

// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         console.log("your city is in the list")
//         flag = true;
//         break;
//     }
// }

// if (flag === false) {
//     console.log("your city is not on the list")
// }

// var cityToCheck = prompt("enter a city to check");
// var firstChar = cityToCheck.slice(0, 1);
// var otherChar = cityToCheck.slice(1);
// firstChar.toUpperCase();
// otherChar.toLowerCase();
// var cappedCity = firstChar + otherChar;

// console.log(cappedCity);


// var month = prompt("enter a month");
// var charInMonth = month.length;
// var monthAbbrev;

// if (charInMonth > 3) {
//     monthAbbrev = month.slice(0 , 3);
// }

// console.log(monthAbbrev);

// REVISE

// var name = prompt("enter any text");

// for (var i = 0; i < name.length; i++) {
//     if (name.slice(i, i+2) === "  ") {
//         console.log("NO DOUBLE SPACES!")
//         break;
//     }
// }

// var enter = prompt("enter a name");
// var length = enter.length;
// var notAllowed = "saley";

// for (var i = 0; i < length; i++) {
//     if (enter.slice(i, i+5) === notAllowed) {
//         console.log("this word is not allowed");
//         break;
//     }
// }

// var text = prompt("enter a text");

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i+10) === "bakchodian") {
//         text = text.slice(0, i) + "galat harkatein" + text.slice(i + 10);
//     }
// }

// console.log(text);

// var text = "bhai jaan bakchodian bakchodian";

// var firstChar = text.indexOf("bakchodian");

// for (var i = 0; i < text.length; i++) {
//     if (firstChar !== -1) {
//         text = text.slice(0, i) + "galat harkatein" + text.slice(i + 10)
//     }
// }

// hundu saley hundu saley

// var text = prompt("enter a text");
// var notAllowed = "saley";
// var index = text.indexOf(notAllowed);


// if (index !== -1) {
//     var before = text.slice(0, index);
//     var after = text.slice(index + 6, text.length);
//     console.log(before + "*Censored* " + after)
// } else {
//     console.log("All Clear");
// }

// var firstName = "muhammad usman";


// for (var i = 0; i < firstName.length; i++) {
//     if (firstName.charAt(i) === "a") {
//         console.log( "founded at " + i )

//     }
// }

// var textArray = [];
// var text = "muhammad usman";


// for (var i = 0; i < text.length; i++) {
//     textArray[i] = text.charAt(i);
//   }

//   console.log(textArray);

// TEXT CENSOR METHODS

//METHOD 1

// var text = prompt("enter a text").toLowerCase();
// var notAllowed = "saley";

// for (var i = 0; i < text.length; i++) {  
//     if (text.slice(i, i + 5) === "saley") {
//         text = text.slice(0, i) + "*Censored*" + text.slice(i+5, text.length);

//     }
// }
// console.log(text);

// METHOD 2

// var text = prompt("enter a text");
// var notAllowed = "saley";
// var index = text.indexOf(notAllowed);

// if (index !== -1) {
//     var before = text.slice(0, index);
//     var after = text.slice(index + 6,  text.length);
//     text = before + "*censored* " + after;
// }

// console.log(text);

// METHOD 3

// var text = prompt("enter a text");

// var newText = text.replace(/saley/g, "*Censored*");

// console.log(newText);

// console.log(Math.floor(1.4131223));

// ASSIGNMENTS 21-25
//1

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;

// console.log("Welcome " + fullName);

//2ND

// var phoneModel = prompt('enter your fav phone model');

// console.log("My favourite phone is: " + phoneModel);
// console.log('Length of string: ' + phoneModel.length)

//3RD

// var str = 'Islamabad';

// console.log('String: ' + str)
// console.log('Index of "n": ' + str.indexOf('b'));

//4th

// var str = 'Hello World';

// console.log('String: ' + str);
// console.log("Last index of 'l': " + str.lastIndexOf('l'));

//5th

// var str = 'Pakistani';

// console.log('String: ' + str);
// console.log('Character at index 3: ' + str.charAt(3));

//6th

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName.concat(" ", lastName);

// console.log(fullName);

//7th

// var city = 'Hyderabad';
// var after = city.replace('Hyder', 'Islam');

// console.log('city: ' + city);
// console.log('After replacement: ' + after);

//8th

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var after = message.replace(/and/g, '&');

// console.log(after);

//9th

// var str = '472';
// var after = Number(str);

// console.log('Value: ' + str);
// console.log('Type: String');
// console.log('Value: ' + after);
// console.log('Type: number');


//10th

// var userInput = prompt("enter a word");

// console.log(userInput.toUpperCase());

//11th

// var userInput = prompt('enter a word');
// var firstChar = userInput.charAt(0).toUpperCase();
// var otherChar = userInput.slice(1, userInput.length).toLowerCase();

// console.log(firstChar + otherChar);

//12th

// var num = 35.36 ;
// var str = num.toString();
// var final = str.replace('.', '');

// console.log(final);

//13th

// let code1 = String.fromCharCode(33);
// let code2 = String.fromCharCode(44);
// let code3 = String.fromCharCode(46);
// let code4 = String.fromCharCode(64);
// let userInput = prompt("enter your name");
// let flag = false;

// for (var i = 0; i < userInput.length; i++) {
//     if (userInput.charAt(i) === code1) {
//         console.log("enter your name without " + '"!"')
//         flag = true;
//         break;
//     }
//     else if (userInput.charAt(i) === code2) {
//         console.log("enter your name without " + '","')
//         flag = true;
//         break;
//     }
//     else if (userInput.charAt(i) === code3) {
//         console.log("enter your name without " + '"."')
//         flag = true;
//         break;
//     }
//     else if (userInput.charAt(i) === code4) {
//         console.log("enter your name without " + '"@"')
//         flag = true;
//         break;
//     }
// }

// if (flag === false) {
//     console.log("username is valid")
// }

//14th

// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let userInput = prompt("Welcome to our bakery. What do you want to order sir");
// let flag = false;

// for (var i = 0; i < userInput.length; i++) {
//     if (userInput.toLowerCase() === A[i]) {
//         console.log(A[i] + " is available at counter " + (i+1)  + " in our bakery")
//         flag = true;
//         break;
//     }
// }

// if (flag === false) {
//     console.log("Item " + userInput + " is not available at our bakery")
// }


//16th

// let university = 'University of Karachi';
// let arr = university.split("");

// console.log(arr);

//17th

// let userInput = prompt('enter a word');
// let lastChar = userInput.charAt(userInput.length-1);

// console.log('User Input: ' + userInput);
// console.log('Last character of input: ' + lastChar);

// 18th

// let str = prompt('the quick brown fox jumps over the lazy dog').toLowerCase();
// let arr = str.split(" ");
// let final = 0;
// let flag = false;

// console.log('Text: the quick brown fox jumps over the lazy dog')

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "the") {
//         final++
//         flag = true;

//     }
// }

// if (flag) {
//     console.log('There a ' + final + ' occurence of word "the"');
// }

// DIFFERENT METHOD

// let str = "The quick brown the fox jumps over the lazy the dog";

// let pattern = /the/ig;
// let occurence = str.match(pattern);
// let count = 0;

// if(occurence != null) count = occurence.length;

// console.log(count)

// CHARACTER COUNTER

// let str = prompt("enter a sentence");
// let arr = str.split(" ");
// let space = 0;
// let flag = false;

// console.log("there are " + arr.length + " words in this sentence");

// for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === " ") {
//         space++
//         flag = true;
//     }
// }

// if (flag) {
//     console.log("there are " + space + " spaces in this sentence");
// }

// console.log("There are " + (str.length - space) + " characters in this word");

//DATE

// let today = new Date();
// let holiday = new Date("June 30, 2035");
// let msToday = today.getTime();
// let msHoliday = holiday.getTime();
// let msDiff = msHoliday - msToday;
// let dayLeft = Math.floor(msDiff / (1000 * 60 * 60 * 24));


// console.log(dayLeft);

//DATE ASSIGNMENT

// let userDate = prompt("enter your date of birth");
// let userMonth = prompt("enter your month of birth").toLowerCase();
// let userYear = prompt("enter your year of birth");
// let DOB = new Date();
// DOB.setDate(userDate);
// DOB.setFullYear(userYear);
// let currentDate = new Date();



// if (userMonth === "january" || userMonth === "jan" || userMonth === "1") {
//     DOB.setMonth(0);
// }
// else if (userMonth === "february" || userMonth === "feb" || userMonth === "2") {
//     DOB.setMonth(1);
// }
// else if (userMonth === "march" || userMonth === "mar" || userMonth === "3") {
//     DOB.setMonth(2);
// }
// else if (userMonth === "april" || userMonth === "apr" || userMonth === "4") {
//     DOB.setMonth(3);
// }
// else if (userMonth === "may" || userMonth === "may" || userMonth === "5") {
//     DOB.setMonth(4);
// }
// else if (userMonth === "june" || userMonth === "jun" || userMonth === "6") {
//     DOB.setMonth(5);
// }
// else if (userMonth === "july" || userMonth === "jul" || userMonth === "7") {
//     DOB.setMonth(6);
// }
// else if (userMonth === "august" || userMonth === "aug" || userMonth === "8") {
//     DOB.setMonth(7);
// }
// else if (userMonth === "september" || userMonth === "sep" || userMonth === "9") {
//     DOB.setMonth(8);
// }
// else if (userMonth === "october" || userMonth === "oct" || userMonth === "10") {
//     DOB.setMonth(9);
// }
// else if (userMonth === "november" || userMonth === "nov" || userMonth === "11") {
//     DOB.setMonth(10);
// }
// else if (userMonth === "december" || userMonth === "dec" || userMonth === "12") {
//     DOB.setMonth(11);
// }
// else {
//     alert("please put correct month")
// }
// let diffMonth = currentDate.getMonth() - DOB.getMonth();
// let diffYear = currentDate.getFullYear() - DOB.getFullYear();

// // console.log(12 + diffMonth)
// if (DOB.getMonth() < currentDate.getMonth()) {
//     diffYear++;
// }

// if (currentDate.getDate() === DOB.getDate() && currentDate.getMonth() === DOB.getMonth()) {
//     document.write(diffYear + " years")
// } else if (currentDate.getMonth() === DOB.getMonth() && currentDate.getDate() < DOB.getDate()) {
//     document.write(diffYear + " years")
// }
//  else {
//     document.write(diffYear - 1 + " years")
// }


// if (currentDate.getMonth() < DOB.getMonth()) {
//     document.write(12 + diffMonth + " months")
// } 
//  else {
//     document.write(diffMonth + " months")
// }




// let diffDate = currentDate.getDate() - DOB.getDate();

// if (currentDate.getDate() > DOB.getDate()) {
//     document.write(diffDate + " days")
// } else {
//     document.write(DOB.getDate() - currentDate.getDate() + " days")
// }


// FUNCTIONS


// function myFunc(x, y) {
//   // x, y are parameters
//   return x * y;
// }

// var check = myFunc(3, 3);
// console.log(check);


// var myName = "Ishaq"; // Global Variable

// function anotherFunc() {
//   var myName = "Mohammad Ishaq"; // Local Variable
//   myName = "Mohammad Ishaq Bhojani";
//   console.log("Local Var", myName);
// }

// anotherFunc();
// console.log(myName)

// var dayOfTheWeek = prompt("enter the day of the week");

// switch (dayOfTheWeek) {
//     case "sat":
//         alert("whop");
//         break;
//     case "sun":
//         alert("whop");
//         break;
//     case "fri":
//         alert("good");
//         break;
//     default:
//         alert("shoot me now")
//         break;
// }

function getName(name) {
    var foo = document.getElementById("input");
    foo.value += name;
}

function empty() {
    var poo = document.getElementById("input");
    poo.value = "";
}

function result() {
    var hoo = document.getElementById("input");
    hoo.value = eval(hoo.value);
}

