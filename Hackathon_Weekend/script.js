// M MODAL
$(document).ready(function() {
    $('.modal').modal();
});
       

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDADH7pAKbZnqB3N9Zqc5dU-Rplk4-becI",
    authDomain: "hackathon-2e68a.firebaseapp.com",
    projectId: "hackathon-2e68a",
    storageBucket: "hackathon-2e68a.appspot.com",
    messagingSenderId: "187404127758",
    appId: "1:187404127758:web:8bbd99331fc6ced80ff65f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const firestore = firebase.firestore();

const signUp = () => {
    const email  = document.getElementById("useremail").value;
    const password  = document.getElementById("userpassword").value;
    const userName = document.getElementById("username").value;
    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    user.userName = userName;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error").innerText = errorMessage
  });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      // ...
      location.href = "./home.html"
    } else {
      // User is signed out
      // ...
    }
  });