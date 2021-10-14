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


const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const setDate = () => {
    document.getElementById("filling-date").innerHTML = `<b>${months[month]}/${day}/${year}</b>`
}
setDate()

const getQuestions = () => {
    const questionsSpan = document.getElementById("show-questions")
    let dataRef = database.ref("teams/" + localStorage.getItem("key") + "/" + months[month] + "-" + day + "-" + year)
    dataRef.on("value", (snapshot) => {
        let data = snapshot.val();
        questionsSpan.innerHTML += `<div class="col-8 mx-5 my-3"><h4>Q1: ${data.q1}</h4></div>
        <div class="col-8 mx-5 "><input id="a1" class="form-control form-control-lg input-borders rounded-0" type="text"
         placeholder="answer 1" aria-label=".form-control-lg example"></div>`
        questionsSpan.innerHTML += `<div class="col-8 mx-5 my-3"><h4>Q2: ${data.q2}</h4></div>
        <div class="col-8 mx-5 "><input id="a2" class="form-control form-control-lg input-borders rounded-0" type="text"
         placeholder="answer 2" aria-label=".form-control-lg example"></div>`
        questionsSpan.innerHTML += `<div class="col-8 mx-5 my-3"><h4>Q3: ${data.q3}</h4></div>
        <div class="col-8 mx-5"><input id="a3" class="form-control form-control-lg input-borders rounded-0" type="text"
           placeholder="answer 3" aria-label=".form-control-lg example"></div>`
    })
}

getQuestions();


const setQuestions = () => {
    const a1 = document.getElementById("a1").value;
    const a2 = document.getElementById("a2").value;
    const a3 = document.getElementById("a3").value;

    let dataRef = database.ref("teams/" + localStorage.getItem("key") + "/" + months[month] + "-" + day + "-" + year +"/answers" );
    dataRef.update({
        a1,
        a2,
        a3
    });
    location.reload()
}