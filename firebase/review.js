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


const getData = () => {
    let dataRef = database.ref("teams");
    dataRef.on("child_added", (snapshot) => {
        if (localStorage.getItem("key") === snapshot.key) {
            let data = snapshot.val();
            getQuestions(data.members);
            showMembers(data)

        }



    })
}
getData()

const showMembers = (data) => {
    let member = data.members
    const memberSpan = document.getElementById("members-list");
    memberSpan.innerHTML += `<span class="badge bg-secondary rounded-pill">${member}</span>&nbsp;`

}

let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

const setQuestions = () => {
    console.log("got it");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    let dataRef = database.ref("teams/" + localStorage.getItem("key") + "/" + months[month] + "-" + day + "-" + year);
    dataRef.update({
        q1,
        q2,
        q3
    })
    location.reload()
}

const getQuestions = (members) => {
    let questionsSpan = document.getElementById("reports");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dataRef = database.ref("teams/" + localStorage.getItem("key") + "/" + months[month] + "-" + day + "-" + year)
    dataRef.on("value", (snapshot) => {
        let data = snapshot.val();
        questionsSpan.innerHTML += `<div class="col-12"><h2 class="mx-4 my-3">${members} : ${months[month]}/${day}/${year}</h2></div>`;
        questionsSpan.innerHTML += `<div class="col-8 mx-5 my-3"><h4>Q1: ${data.q1}</h4></div>
        <div class="col-8 mx-5 "><h4 class="px-5">A1: <ins><span id="a1"></span></ins></h4></div>`
        questionsSpan.innerHTML += `<div class="col-8 mx-5 my-3"><h4>Q2: ${data.q2}</h4></div>
        <div class="col-8 mx-5 "><h4 class="px-5">A2: <ins><span id="a2"></span></ins></h4></div>`
        questionsSpan.innerHTML += `<div class="col-8 mx-5 my-3"><h4>Q3: ${data.q3}</h4></div>
        <div class="col-8 mx-5"><h4 class="px-5">A3: <ins><span id="a3"></span></ins></h4></div>`
    })
    getAnswers()
}

const getAnswers = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dataRef = database.ref("teams/" + localStorage.getItem("key") + "/" + months[month] + "-" + day + "-" + year + "/answers");
    dataRef.on("child_added", (snapshot) => {
        let data = snapshot.val();
        setAnswers(data)

    })
}

let counter = 0;
const setAnswers = (data) => {
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");
    
    if(counter === 0) {
         a1.innerText = data;
         counter++
    } else if (counter === 1) {
        a2.innerText = data;
        counter++
    } else if (counter === 2) {
        a3.innerText = data;
        counter++
    }
    console.log(data);
   
}