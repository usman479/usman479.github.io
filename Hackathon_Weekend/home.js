
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

const signOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.

    }).catch((error) => {
        // An error happened.
    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        var uid = user.uid;
        const displayName = document.getElementById("user");
        displayName.innerText = auth.currentUser.email;
        // ...

    } else {
        // User is signed out
        // ...
        location.href = "./index.html"
    }
});

let live = document.getElementById("lives");
let pop = document.getElementById("pop");
let scoreDiv = document.getElementById("score");
let colorRange = ["purple", "yellow", "green", "brown", "blue", "red"];
let divs = document.getElementsByClassName("balloon");
let score = 0;
let lives = 5;
let level = 1;
let difficulty = document.getElementById("difficulty");
let levelDiv = document.getElementById("level");
levelDiv.innerHTML = level;
const colorGenerator = () => {
    let col = colorRange[Math.floor(Math.random() * 6)];
    pop.style.fontSize = "60px"
    pop.style.color = col;
    pop.innerHTML = `${col}`
}
colorGenerator();

for (let i = 0; i <= 24; i++) {
    let col = colorRange[Math.floor(Math.random() * 6)];
    divs[i].style.color = col;
    divs[i].style.backgroundColor = col;
    divs[i].setAttribute("onmouseover", "check(this)")

}

const setColor = () => {
    for (let i = 0; i <= 24; i++) {
        divs[i].innerHTML = "";
        let col = colorRange[Math.floor(Math.random() * 6)]
        divs[i].style.backgroundColor = col;
        divs[i].setAttribute("onmouseover", "check(this)")
    }
}



const check = (e) => {
    if (e.style.backgroundColor === document.getElementById("pop").innerText) {
        e.removeAttribute("onmouseover")
        e.style.backgroundColor = "white"
        e.innerText = "POP!"
        score += 10;
        scoreDiv.innerText = score;
        colorGenerator()
        if (score === 50) {
            alert("Level Completed")
            level++;
            levelDiv.innerHTML = level;
            difficulty.innerHTML = "Colors will change randomly every 4 seconds"
            setColor();
            let colorInterval =  setInterval(function () {
                for (let i = 0; i <= 24; i++) {
                    let col = colorRange[Math.floor(Math.random() * 6)];
                    divs[i].innerHTML = "";
                    divs[i].style.color = col;
                    divs[i].style.backgroundColor = col;
                    divs[i].setAttribute("onmouseover", "check(this)")

                }
            }, 4000);
            if (score === 100) {
                alert("Level Completed");
                // clearInterval(colorInterval);
                // level++;
                // levelDiv.innerHTML = level;
                // difficulty.innerHTML = "Colors will change randomly every 4 seconds";
                // setColor()
            }

        }
    }else if (score === 100) {
        alert("Level Completed");
        clearInterval(colorInterval);
        level++;
        levelDiv.innerHTML = level;
        difficulty.innerHTML = "Colors will change randomly every 4 seconds";
        setColor()
    } else {
        --lives;
        if (lives === 0) {
            live.innerText = lives;
            alert("Game Over")
            location.reload()
        } else {
            e.removeAttribute("onmouseover")
            e.style.backgroundColor = "white"
            e.innerText = "OOPS!"
            live.innerText = lives;
            colorGenerator()
        }

    }
}
