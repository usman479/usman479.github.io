class Users {
    constructor(name, email, password, teams) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.teams = [];
    }
}

const signUp = () => {
    let flag = true;

    // SELECTING DOM FOR GETTING VALUES    
    const userName = document.getElementById("username");
    const userEmail = document.getElementById("useremail");
    const userPass = document.getElementById("userpass");
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = document.getElementById("emailcheck");
    const passwordCheck = document.getElementById("passwordcheck");
    const check = document.getElementById("check")
    let data = new Users(userName.value, userEmail.value, userPass.value);
    passwordCheck.innerText = "";
    emailCheck.innerText = ""
    check.removeAttribute("src")

    if (emailPattern.test(userEmail.value) && passwordPattern.test(userPass.value)) {
        for (let i = 0; i <= localStorage.length; i++) {
            if (userEmail.value === localStorage.key(i)) {
                emailCheck.innerText = `This Email is already taken`;
                flag = false;
                break;
            }
        }
        if (flag) {
            localStorage.setItem(data.email, JSON.stringify(data));
            passwordCheck.style.color = "green";
            passwordCheck.style.fontSize = "40px";
            passwordCheck.innerText = "Account Created";
            check.setAttribute("src", "./check-green.gif")
        }
    } else if (!emailPattern.test(userEmail.value)) {
        emailCheck.innerText = "* Email is not correct"
    } else {
        passwordCheck.innerText = `* Your password should be atleast 6 digits & contain
        1 character
        1 number
        1 special character`;
    }


}

const logIn = () => {
    const userEmail = document.getElementById("email");
    const userPassword = document.getElementById("password");
    const emailLogin = document.getElementById("email_login")
    const passLogin = document.getElementById("pass_login")
    emailLogin.innerText = ""
    passLogin.innerText = ""
    let data;
    let flag = true;
    let flag2 = true;
    for (let i = 0; i < localStorage.length; i++) {
        if (userEmail.value === localStorage.key(i)) {
            data = JSON.parse(localStorage.getItem(localStorage.key(i)));
            flag = false;
            if (userPassword.value === data.password) {
                localStorage.setItem("currentUser", userEmail.value);
                location.href = "./home.html"
                flag2 = false;
                // show();

                break;
            }
        }
    }
    if (flag) {
        emailLogin.innerText = "*Email does not exist"
        flag2 = false;
    }

    if (flag2) {
        passLogin.innerText = "*Password & Email not match"
    }

}



const createTeam = () => {
    const teamName = document.getElementById("teamname");
    const category = document.getElementById("category");
    const members = document.getElementById("members");
    const error = document.getElementById("listofmembers")
    if (members.value !== "" && teamName.value !== "" && category.value !== "") {
        let getData = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")))
        getData.teams.push({
            admin: localStorage.getItem("currentUser"),
            name: teamName.value,
            category: category.value,
            members: [members.value]
        })

        if (JSON.parse(localStorage.getItem(members.value))) {
            localStorage.setItem(localStorage.getItem("currentUser"), JSON.stringify(getData));
            let mem = JSON.parse(localStorage.getItem(members.value));
            mem.teams.push({
                admin: localStorage.getItem("currentUser"),
                name: teamName.value,
                category: category.value,
                members: [members.value]
            })
            localStorage.setItem(members.value, JSON.stringify(mem))
            window.location.reload();
        } else {
            alert("member not exists")
        }

    } else {

        error.innerHTML = "*Please fill out all fields"
    }

}


// function show  () {
//     const teamsOwn = document.getElementById("teamsown");
//     const teamsPart = document.getElementById("teamspart");
//     let currentUser = localStorage.getItem("currentUser");
//     let getData = JSON.parse(localStorage.getItem(currentUser));
//     console.log(getData);
//     console.log(getData.teams.length);
//     console.log(getData.teams[0].admin)
//     for (let i = 0; i < getData.teams.length; i++) {
//         if (currentUser === getData.teams[i].admin) {
//             teamsOwn.innerHTML += `<div class="container border border-1 border-dark my-5">
// <div class="row p-4">
//     <div class="col-12">
//         <p class="h2">${getData.teams[i].name}</p>
//     </div>
//     <div class="col-12">
//         <p><span class="fw-bold">Members: </span>${getData.teams[i].members[0]}</p>
//     </div>
// </div>

// </div>`
//         } else {
//             teamsPart.innerHTML += `<div class="container border border-1 border-dark my-5">
//             <div class="row p-4">
//                 <div class="col-12">
//                     <p class="h2">${getData.teams[i].name}</p>
//                 </div>
//                 <div class="col-12">
//                     <p><span class="fw-bold">Members: </span>${getData.teams[i].members[0]}</p>
//                 </div>
//             </div>

//             </div>`
//         }
//     }


// }

// const add = () => {
//    let currentUser = localStorage.getItem("currentUser");
//   let getData =  JSON.parse(localStorage.getItem(currentUser));
//    getData.teams
// }