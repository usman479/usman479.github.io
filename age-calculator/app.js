//DATE ASSIGNMENT

let userDate = prompt("enter your date of birth");
let userMonth = prompt("enter your month of birth").toLowerCase();
let userYear = prompt("enter your year of birth");
let DOB = new Date();
DOB.setDate(userDate);
DOB.setFullYear(userYear);
let currentDate = new Date();



if (userMonth === "january" || userMonth === "jan" || userMonth === "1") {
    DOB.setMonth(0);
}
else if (userMonth === "february" || userMonth === "feb" || userMonth === "2") {
    DOB.setMonth(1);
}
else if (userMonth === "march" || userMonth === "mar" || userMonth === "3") {
    DOB.setMonth(2);
}
else if (userMonth === "april" || userMonth === "apr" || userMonth === "4") {
    DOB.setMonth(3);
}
else if (userMonth === "may" || userMonth === "may" || userMonth === "5") {
    DOB.setMonth(4);
}
else if (userMonth === "june" || userMonth === "jun" || userMonth === "6") {
    DOB.setMonth(5);
}
else if (userMonth === "july" || userMonth === "jul" || userMonth === "7") {
    DOB.setMonth(6);
}
else if (userMonth === "august" || userMonth === "aug" || userMonth === "8") {
    DOB.setMonth(7);
}
else if (userMonth === "september" || userMonth === "sep" || userMonth === "9") {
    DOB.setMonth(8);
}
else if (userMonth === "october" || userMonth === "oct" || userMonth === "10") {
    DOB.setMonth(9);
}
else if (userMonth === "november" || userMonth === "nov" || userMonth === "11") {
    DOB.setMonth(10);
}
else if (userMonth === "december" || userMonth === "dec" || userMonth === "12") {
    DOB.setMonth(11);
}
else {
    alert("please put correct month")
}
let diffMonth = currentDate.getMonth() - DOB.getMonth();
let diffYear = currentDate.getFullYear() - DOB.getFullYear();

// console.log(12 + diffMonth)
if (DOB.getMonth() < currentDate.getMonth()) {
    diffYear++;
}

if (currentDate.getDate() === DOB.getDate() && currentDate.getMonth() === DOB.getMonth()) {
    document.write(diffYear + " years ")
} else if (currentDate.getMonth() === DOB.getMonth() && currentDate.getDate() < DOB.getDate()) {
    document.write(diffYear + " years ")
}
 else {
    document.write(diffYear - 1 + " years ")
}


if (currentDate.getMonth() === DOB.getMonth() && currentDate.getDate() > DOB.getDate()) {
    diffMonth = 11;
    document.write(diffMonth + " months & ")
}
else if (currentDate.getMonth() < DOB.getMonth()) {
    document.write(12 + diffMonth + " months & ")
} else if (currentDate.getDate() > DOB.getDate() && currentDate.getMonth() >= DOB.getMonth()) {
    document.write()
}
 else {
    document.write(diffMonth + " months & ")
}




let diffDate = currentDate.getDate() - DOB.getDate();

if (currentDate.getDate() < DOB.getDate()) {
    document.write((DOB.getDate() - currentDate.getDate()) + " days")
}
else if (currentDate.getDate() > DOB.getDate() && currentDate.getMonth() === DOB.getMonth()) {
    document.write((30 - diffDate) + " days")
}
else if (currentDate.getDate() > DOB.getDate()) {
    document.write((30 - diffDate) + " days")
}
 else {
    document.write(DOB.getDate() - currentDate.getDate() + " days")
}