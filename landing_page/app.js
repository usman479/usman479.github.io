// FIREBASE //
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { storage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
// https://firebase.google.com/docs/web/setup#available-libraries



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

let courseChart = document.querySelectorAll(".course-chart");
let courseChart2 = document.querySelectorAll(".course-chart-02");
let courseChart3 = document.querySelectorAll(".course-chart-03");
let courseCharts = [courseChart,courseChart2,courseChart3];
let count = 0;

// PAPERS COUNT //

let attempt = document.getElementById("Attempt");
let attempt2 = document.getElementById("Attempt02");
let attempt3 = document.getElementById("Attempt03");
let attemptSelect = document.getElementsByName("Attempt")[0];
let attempt2Select = document.getElementsByName("Attempt02")[0];
let attempt3Select = document.getElementsByName("Attempt03")[0];
let paper01 = "";
let paper02 = "";
let paper03 = "";
let flag1 = true;
let flag2 = true;
let flag3 = true;
let removeFlag1 = false;
let removeFlag2 = false;
let removeFlag3 = false;

var courseModal01 = new bootstrap.Modal(document.getElementById('courseModal'), {
  keyboard: true
})
var courseModal02 = new bootstrap.Modal(document.getElementById('courseModal02'), {
  keyboard: true
})
var courseModal03 = new bootstrap.Modal(document.getElementById('courseModal03'), {
  keyboard: true
})
let countSpan = document.querySelector("#papers-count");




let plus01 = document.querySelector("#plus01");
let plus02 = document.querySelector("#plus02");
let plus03 = document.querySelector("#plus03");
let close01 = document.getElementById("close01");
let close02 = document.getElementById("close02");
let close03 = document.getElementById("close03");
let [box01,box02,box03] = document.getElementsByClassName("course-select-boxes");
function counter01(e) {
 
  if(flag1){
  ++count;
  countSpan.innerHTML = "0" + count;
  flag1 = false;
  removeFlag1 = true;
  }
    attempt.classList.remove("hidden");
    attemptSelect.setAttribute("required","required");
    paper01 = e.getAttribute("value");
    close01.removeAttribute("disabled");
    plus01.classList.remove("dp-none");
    
    addPlusBox01(e);
    priceCalc();
    courseModal01.toggle();
}
function counter02(e) {
 
  if(flag2){
  ++count;
  countSpan.innerHTML = "0" + count;
  flag2 = false;
  removeFlag2 = true;
  }
    attempt2.classList.remove("hidden");
    attempt2Select.setAttribute("required","required");
    paper02 = e.getAttribute("value");
    close02.removeAttribute("disabled");
    plus02.classList.remove("dp-none");
    addPlusBox02(e);
    priceCalc();
    courseModal02.toggle();
}
function counter03(e) {
 
  if(flag3){
  ++count;
  countSpan.innerHTML = "0" + count;
  flag3 = false;
  removeFlag3 = true;
  }
    attempt3.classList.remove("hidden");
    attempt3Select.setAttribute("required","required");
    paper03 = e.getAttribute("value");
    close03.removeAttribute("disabled");
    plus03.classList.remove("dp-none");
    addPlusBox03(e);
    priceCalc();
    courseModal03.toggle();
}

// let close01 = document.getElementById("close01");
// let close02 = document.getElementById("close02");
// let close03 = document.getElementById("close03");

function removeCourse01 (e) {
        if(removeFlag1){
          --count;
          countSpan.innerHTML = "0" + count;
          flag1 = true;
          removeFlag1 = false;
        }
        attempt.classList.add("hidden");
        attemptSelect.removeAttribute("required");
        close01.setAttribute("disabled","disabled");
        paper01 = "";
        plus01.classList.add("dp-none");
        box01.innerHTML = `<div class="circle-plus d-flex justify-content-center " id="plus01">
        +
      </div>`
        priceCalc();
        delPlusBox01(e);

}
function removeCourse02 (e) {
        if(removeFlag2){
          --count;
          countSpan.innerHTML = "0" + count;
          flag2 = true;
          removeFlag2 = false;
        }
        attempt2.classList.add("hidden");
        attempt2Select.removeAttribute("required");
        close02.setAttribute("disabled","disabled");
        paper02 = "";
        plus02.classList.add("dp-none");
        box02.innerHTML = `<div class="circle-plus d-flex justify-content-center " id="plus02">
        +
      </div>`
        priceCalc();
        delPlusBox02(e);
}
function removeCourse03 (e) {
        if(removeFlag3){
          --count;
          countSpan.innerHTML = "0" + count;
          flag3 = true;
          removeFlag3 = false;
        }
        attempt3.classList.add("hidden");
        attempt3Select.removeAttribute("required");
        close03.setAttribute("disabled","disabled");
        paper03 = "";
        plus03.classList.add("dp-none");
        box03.innerHTML = `<div class="circle-plus d-flex justify-content-center " id="plus03">
        +
      </div>`
        priceCalc();
        delPlusBox01(e);
}

let amountBox = document.querySelectorAll(".amount-box-2")[0];
function priceCalc () {
  if(count === 1){
    amountBox.innerHTML = "&nbsp;&nbsp;25,000"
  } else if (count === 2){
    amountBox.innerHTML = "&nbsp;&nbsp;40,000"
  } else if(count === 3){
    amountBox.innerHTML = "&nbsp;&nbsp;50,000"
  } else if(count === 0) {
    amountBox.innerHTML = "&nbsp;&nbsp;00"
  }
}

function discPriceCalc () {
  if(count === 1){
    amountBox.innerHTML = "&nbsp;&nbsp;20,000"
  } else if (count === 2){
    amountBox.innerHTML = "&nbsp;&nbsp;32,000"
  } else if(count === 3){
    amountBox.innerHTML = "&nbsp;&nbsp;40,000"
  }
}



// COUPON //
let couponSpan = document.querySelector("#coupon-span");
let coupon = document.querySelector("#coupon");


coupon.addEventListener("keyup", (e) => {
  couponSpan.innerHTML = "";
  if((cityInput.value+"20") === e.target.value){
     couponSpan.innerHTML = "Discount Received";
     discPriceCalc();
  } else {
    priceCalc();
  }
})


// SLIDER //
var slider = document.querySelector(".form-slider");
var toggle = document.getElementsByClassName("toggle");
var coursesRow = document.querySelector("#courses-row");
for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", toggleSlider, true);
}

function toggleSlider() {
  if (slider.classList.contains("opened")) {
    slider.classList.remove("opened");
    slider.classList.add("closed");
    slider.classList.add("dp-none");
    coursesRow.classList.remove("dp-none");
  } else {
    slider.classList.remove("closed");
    slider.classList.add("opened");
    slider.classList.remove("dp-none");
    coursesRow.classList.add("dp-none");
  }
}

// AREAS //

let cities = document.querySelector("#cities");
let areas = document.querySelector("#Areas");
let cityInput = document.querySelector("#city-input");
let areaInput = document.querySelector("#area-input");
let areaInputBox = document.getElementsByName("Area/Locality")[0];

cityInput.addEventListener("keyup", (e) => {
  if(e.target.value.toLowerCase() === "karachi") {
    // areaInput.classList.remove("dp-none")
    areaInputBox.setAttribute("required","required");
    areaInputBox.removeAttribute("disabled");
  }else if(e.target.classList.contains("dp-none") === false){
    // areaInput.classList.add("dp-none")
    areaInputBox.removeAttribute("required");
    areaInputBox.setAttribute("disabled","disabled")
  }
})


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



let submitBtn = document.querySelector("#submit-btn");
let loader = document.querySelectorAll(".loader")[0];

function resetForm() {
  form.reset();
  count = 0;
  countSpan.innerHTML = 0;
  amountBox.innerHTML = 0;
}

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

  if(count === 1){
    loader.classList.remove("dp-none");
    submitBtn.disabled = true;
    form["Paper(s)"].value = paper01 || paper02 || paper03;
    form.Attempt.value = form.Attempt.value || form.Attempt02.value || form.Attempt03.value;
    storageRef
      .child(name)
      .put(file)
      .then((snapshot) => {
        storageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log("1st");
            form.ICAP_Card.value = url;
          })
          .then(() => {
            console.log("2nd");
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                  loader.classList.add("dp-none");
                    submitBtn.disabled = false;
                    alert(
                      "Thanks for Contacting us..! We Will Contact You Soon..."
                    )
                    resetForm();
                  })
                  .catch((error) => {
                    console.error("Error!", error.message)
                    loader.classList.add("dp-none");
                    submitBtn.disabled = false;});
                    resetForm();
                    
                  })
                  .catch((error) => {
                    console.error("Error!", error.message)
                    loader.classList.add("dp-none");
                    submitBtn.disabled = false;});
                    resetForm();
                    
      });
    
  } else if (count === 2){
    loader.classList.remove("dp-none");
    submitBtn.disabled = true;
    storageRef
      .child(name)
      .put(file)
      .then((snapshot) => {
        storageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log("1st");
            form.Attempt.value = form.Attempt.value || form.Attempt02.value;
            form["Paper(s)"].value = paper01 || paper02;
            form.ICAP_Card.value = url;
          })
          .then(() => {
            console.log("2nd");
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                  console.log(form.Attempt.value);
                //SECOND //
                form.Attempt.value = form.Attempt03.value || form.Attempt02.value;
                form["Paper(s)"].value = paper03 || paper02;
                console.log(form.Attempt.value);
                resetForm();
                fetch(scriptURL, {
                    method: "POST",
                    body: new FormData(form),
                  }).then((response) => {
                    loader.classList.add("dp-none");
                    submitBtn.disabled = false;
                    alert(
                      "Thanks for Contacting us..! We Will Contact You Soon..."
                    )
                    resetForm();
                  });
              })
              .catch((error) => {
                console.error("Error!", error.message)
                loader.classList.add("dp-none");
                submitBtn.disabled = false;});
                resetForm();
          })
          .catch((error) => {
            console.error("Error!", error.message)
            loader.classList.add("dp-none");
            submitBtn.disabled = false;});
            resetForm();
      });
  } else if(count === 3){
    loader.classList.remove("dp-none");
  submitBtn.disabled = true;
  storageRef
    .child(name)
    .put(file)
    .then((snapshot) => {
      storageRef
        .child(name)
        .getDownloadURL()
        .then((url) => {
          console.log("FIRIST");
          form["Paper(s)"].value = paper01;
          form.ICAP_Card.value = url;
        })
        .then(() => {
          console.log("SECOND");
          fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log(form.Attempt.value);
              //SECOND //
              form.Attempt.value = form.Attempt02.value;
              form["Paper(s)"].value = paper02;
              console.log(form.Attempt.value);
              resetForm();
              fetch(scriptURL, {
                  method: "POST",
                  body: new FormData(form),
                }).then((response) => {
                    // THIRD //
                    form.Attempt.value = form.Attempt03.value;
                    form["Paper(s)"].value = paper01;
                    console.log(form.Attempt.value);
                    resetForm();
                fetch(scriptURL, { method: "POST", body: new FormData(form) })
                  .then((response) =>{
                    loader.classList.add("dp-none");
                    submitBtn.disabled = false;
                    alert(
                      "Thanks for Contacting us..! We Will Contact You Soon..."
                    );
                    resetForm();
                  }
                  )
                  .catch((error) => {
                    console.error("Error!", error.message)
                    loader.classList.add("dp-none");
                    submitBtn.disabled = false;
                    resetForm();});
              });
            })
            .catch((error) => {
              console.error("Error!", error.message)
              loader.classList.add("dp-none");
              submitBtn.disabled = false;
              resetForm();});
        })
        .catch((error) => {
          console.error("Error!", error.message)
          loader.classList.add("dp-none");
          submitBtn.disabled = false;
          resetForm();});
    });
  }
  
});


function addPlusBox01 (e) {
    let boxes = document.querySelectorAll(".course-select-boxes")[0];
    plus01.classList.add("dp-none");
    boxes.innerHTML = `<img src="${e.getAttribute('src')}" class="height100">`;
    paper01 = e.getAttribute("src"); 
}
function addPlusBox02 (e) {
    let boxes = document.querySelectorAll(".course-select-boxes")[1];
    plus02.classList.add("dp-none");
    boxes.innerHTML = `<img src="${e.getAttribute('src')}" class="height100">`;
    paper02 = e.getAttribute("src");
    
  }
function addPlusBox03 (e) {
    let boxes = document.querySelectorAll(".course-select-boxes")[2];
    plus03.classList.add("dp-none");
    boxes.innerHTML = `<img src="${e.getAttribute('src')}" class="height100">`;
    paper03 = e.getAttribute("src");
}

function delPlusBox01(e){
  let boxes = document.querySelectorAll(".course-select-boxes")[0];
  plus01.classList.remove("dp-none");
  boxes.innerHTML = "";
  paper01 = "";
}
function delPlusBox02(e){
  let boxes = document.querySelectorAll(".course-select-boxes")[1];
  plus02.classList.remove("dp-none");
  boxes.innerHTML = "";
  paper02 = "";
}
function delPlusBox03(e){
  let boxes = document.querySelectorAll(".course-select-boxes")[2];
  plus03.classList.remove("dp-none");
  boxes.innerHTML = "";
  paper03 = "";
}

let coursesChart = document.querySelectorAll(".course-chart");
let coursesChart02 = document.querySelectorAll(".course-chart-02");
let coursesChart03 = document.querySelectorAll(".course-chart-03");

// for(let i=0; i<coursesChart.length; i++) {
//     coursesChart[i].addEventListener("click", addPlusBox01)
// }
// for(let i=0; i<coursesChart.length; i++) {
//     coursesChart02[i].addEventListener("click", addPlusBox02)
// }
// for(let i=0; i<coursesChart.length; i++) {
//     coursesChart03[i].addEventListener("click", addPlusBox03)
// }

