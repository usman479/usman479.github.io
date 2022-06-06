// FIREBASE //
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { storage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIU5tdRe4Fvm0_8ktwR6XWe0yBtPADv6g",
  authDomain: "landing-page-e94ed.firebaseapp.com",
  projectId: "landing-page-e94ed",
  storageBucket: "landing-page-e94ed.appspot.com",
  messagingSenderId: "929767843654",
  appId: "1:929767843654:web:683ef0d1f6a9e4852de747",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

function upload() {
  var storageRef = firebase.storage().ref();
  var file = document.getElementById("ICAP").files[0];
  var name = new Date() + "-" + file.name;
  const metaData = {
    contentType: file.type,
  };

  storageRef
    .child(name)
    .put(file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
}

let sindhCities = ["karachi", "hyderabad", "sukkur", "nawabshah", "thatta"];
let kpkCities = ["abbotabad", "peshawar", "mansehra", "mardan", "kohat"];
let balochistanCities = ["quetta", "ziarat", "khuzdar", "gwadar", "jacobabad"];
let punjabCities = [
  "lahore",
  "islamabad",
  "rawalpindi",
  "faisalabad",
  "gujranwala",
];
let karachiAreas = [
  "Gulshan e Iqbal",
  "Gulistan e Jauhar",
  "FB Area",
  "North Nazimabad",
  "Shahrah-e-Faisal",
  "Liaquatabad",
  "Gulshan e shamim",
  "Gulzar e Hijri",
  "PECHS",
  "SMCHS",
];
let inp = document.querySelector("#ICAP");
let papers = document.querySelectorAll(".papers");
let province = document.querySelector("#province");

let imageSize = document.getElementById("image-size");

province.addEventListener("change", () => {
  let cities = document.querySelector("#cities");
  let render = "";
  cities.innerHTML = "";
  if (province.value === "sindh") {
    render = sindhCities;
  } else if (province.value === "balochistan") {
    render = balochistanCities;
  } else if (province.value === "kpk") {
    render = kpkCities;
  } else {
    render = punjabCities;
  }
  for (let i = 0; i < render.length; i++) {
    cities.innerHTML += `<option value=${render[i]}>`;
  }
});

inp.addEventListener("change", () => {
  imageSize.innerText = "";
  let files = inp.files;
  if (files.length > 0) {
    if (files[0].size > 400 * 1024) {
      imageSize.innerText = "File Size Exceeds 400kb";
    }
  }
});

let count = 0;
function papersCount() {
  let countSpan = document.querySelector("#papers-count");
  count = 0;
  countSpan.innerHTML = "";
  for (let i = 0; i < papers.length; i++) {
    if (papers[i].value != "") {
      ++count;
    }
  }
  countSpan.innerHTML = "0" + count;
}

for (let i = 0; i < papers.length; i++) {
  papers[i].addEventListener("change", papersCount);
}

// SLIDER //
var slider = document.querySelector(".form-slider");
var toggle = document.getElementsByClassName("toggle");
for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", toggleSlider, true);
}

function toggleSlider() {
  if (slider.classList.contains("opened")) {
    slider.classList.remove("opened");
    slider.classList.add("closed");
    slider.classList.add("dp-none");
  } else {
    slider.classList.remove("closed");
    slider.classList.add("opened");
    slider.classList.remove("dp-none");
  }
}

// AREAS //

let cities = document.querySelector("#cities");
let areas = document.querySelector("#Areas");
cities.addEventListener("change", () => {
  areas.innerHTML = "";
  console.log(cities.value);
  if (cities.value.toLowerCase() === "karachi") {
    for (let i = 0; i < karachiAreas.length; i++) {
      areas.innerHTML += `<option value=${areas[i]}>`;
    }
  }
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxngfvVQfWAr-XpcDx6oMnw9LhzlX-EzsElea20jYqpFhLaO16juRhMrSCzQts0fMGEtA/exec";
let form = document.forms["registration-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let files = inp.files;
  if (files.length > 0) {
    if (files[0].size > 400 * 1024) {
      alert("File Size Exceeds 400kb");
      return false;
    }
  }

  var storageRef = firebase.storage().ref();
  var file = document.querySelector("#ICAP").files[0];
  var name = new Date() + "-" + file.name;
  const metaData = {
    contentType: file.type,
  };

  form.Paper_Count.value = count;

  storageRef
    .child(name)
    .put(file)
    .then((snapshot) => {
      storageRef
        .child(name)
        .getDownloadURL()
        .then((url) => {
          console.log("FIRIST");
          form.ICAP_Card.value = url;
        })
        .then(() => {
          console.log("SECOND");
          fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log(form.Attempt.value);
              //SECOND //
              form.Attempt.value = form.Attempt02.value;
              console.log(form.Attempt.value);
              fetch(scriptURL, {
                  method: "POST",
                  body: new FormData(form),
                }).then((response) => {
                    // THIRD //
                    form.Attempt.value = form.Attempt03.value;
                    console.log(form.Attempt.value);
                fetch(scriptURL, { method: "POST", body: new FormData(form) })
                  .then((response) =>
                    alert(
                      "Thanks for Contacting us..! We Will Contact You Soon..."
                    )
                  )
                  .catch((error) => console.error("Error!", error.message));
              });
            })
            .catch((error) => console.error("Error!", error.message));
        })
        .catch((error) => console.error("Error!", error.message));
    });
});


function addPlusBox01 (e) {
    let plus01 = document.querySelector("#plus01");
    let boxes = document.querySelectorAll(".course-select-boxes")[0];
    plus01.classList.add("dp-none");
    boxes.innerHTML = `<img src="${e.target.getAttribute('src')}" class="height100">`
    console.log(e.target.getAttribute("src"));

}
function addPlusBox02 (e) {
    let plus02 = document.querySelector("#plus02");
    let boxes = document.querySelectorAll(".course-select-boxes")[1];
    plus02.classList.add("dp-none");
    boxes.innerHTML = `<img src="${e.target.getAttribute('src')}" class="height100">`
    console.log(e.target.getAttribute("src"));

}
function addPlusBox03 (e) {
    let plus03 = document.querySelector("#plus03");
    let boxes = document.querySelectorAll(".course-select-boxes")[2];
    plus03.classList.add("dp-none");
    boxes.innerHTML = `<img src="${e.target.getAttribute('src')}" class="height100">`
    console.log(e.target.getAttribute("src"));

}

let coursesChart = document.querySelectorAll(".course-chart");
let coursesChart02 = document.querySelectorAll(".course-chart-02");
let coursesChart03 = document.querySelectorAll(".course-chart-03");

for(let i=0; i<coursesChart.length; i++) {
    coursesChart[i].addEventListener("click", addPlusBox01)
}
for(let i=0; i<coursesChart.length; i++) {
    coursesChart02[i].addEventListener("click", addPlusBox02)
}
for(let i=0; i<coursesChart.length; i++) {
    coursesChart03[i].addEventListener("click", addPlusBox03)
}

