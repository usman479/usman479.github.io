// OBJECTS 2

let obj = {
    name: "muhammad",
    email: "m@m.com",
    password: "saylani",
    age: 20,
    gender: "m",
    city: "karachi",
    country: "pakistan"
}

if("age" in obj === true) {
    document.write("age property exists in obj" + "<br>")
} else {
    document.write("age property does not exists in obj" + "<br>")
}

if("country" in obj === true) {
    document.write("country property exists in obj" + "<br>")
} else {
    document.write("country property does not exists in obj" + "<br>")
}

if("firstName" in obj === true) {
    document.write("firstName property exists in obj" + "<br>")
} else {
    document.write("firstName property does not exists in obj" + "<br>")
}

if("lastName" in obj === true) {
    document.write("lastName property exists in obj" + "<br>")
} else {
    document.write("lastName property does not exists in obj" + "<br>")
}