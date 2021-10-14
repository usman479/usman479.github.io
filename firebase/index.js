const firebaseConfig = {
    apiKey: "AIzaSyCVUYEQXrxFn_fDlSUMH_yrb6O993J4wl0",
    authDomain: "team-reporter-bf9f2.firebaseapp.com",
    projectId: "team-reporter-bf9f2",
    storageBucket: "team-reporter-bf9f2.appspot.com",
    messagingSenderId: "473907083669",
    appId: "1:473907083669:web:72f178a9034a0da5759e9c",
    measurementId: "G-SBME2D9246"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

let userName;

const signUp = () => {
     
    const email = document.getElementById("useremail").value;
    const password = document.getElementById("userpass").value;
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = document.getElementById("emailcheck");
    const passwordCheck = document.getElementById("passwordcheck");
    emailCheck.innerText = "";
    passwordCheck.innerText = "";


    if (email === "" || password === "" || userName === "") {
        passwordCheck.innerText = "*please fill out all fields"
    } else if (emailPattern.test(email) === false) {
        emailCheck.innerText = "* Email is not correct"
    } else if (passwordPattern.test(password) === false) {
        passwordCheck.innerText = `* Your password should be atleast 6 digits & contain
         1 character
         1 number
         1 special character`;
    }
    else {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...


                // passwordCheck.style.color = "green";
                // passwordCheck.style.fontSize = "40px";
                // passwordCheck.innerText = "Account Created";
                // check.setAttribute("src", "./check-green.gif")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                // ..
            });
    }

}

auth.onAuthStateChanged((user) => {
    if (user) {
        
        location.href = "./home.html"
    } else {

    }
});

const logIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordCheck = document.getElementById("pass_login");
    // console.log(email.value, password.value);
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            passwordCheck.innerText = `${errorMessage}`
            // ...
            // ..
        });
}





