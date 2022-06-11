// FIREBASE //
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { storage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
// https://firebase.google.com/docs/web/setup#available-libraries


let price = 0;
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

// province.addEventListener("change", () => {
//   let cities = document.querySelector("#cities");
//   let render = "";
//   cities.innerHTML = "";
//   if (province.value === "sindh") {
//     render = sindhCities;
//   } else if (province.value === "balochistan") {
//     render = balochistanCities;
//   } else if (province.value === "kpk") {
//     render = kpkCities;
//   } else {
//     render = punjabCities;
//   }
//   for (let i = 0; i < render.length; i++) {
//     cities.innerHTML += `<option value=${render[i]}>`;
//   }
// });

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

let attempt1 = document.getElementsByName("Attempt")[0];
let attempt2 =  document.getElementsByName("Attempt02")[0];
let attempt3 =  document.getElementsByName("Attempt03")[0];
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


let countSpan = document.querySelector("#papers-count");

var formModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false
})
var courseModal01 = new bootstrap.Modal(document.getElementById('courseModal01'), {
  keyboard: false
})

var modalTry = document.getElementById("courseModal01");
let courseImages = document.getElementsByClassName("course-image");

let plusBox01 = document.getElementById("plus-box-01");
let plusBox02 = document.getElementById("plus-box-02");
let plusBox03 = document.getElementById("plus-box-03");
let modalTryFlag = true;
modalTry.addEventListener("show.bs.modal",function(e){
  var button = e.relatedTarget;
  var recipient = button.getAttribute('data-bs-whatever');
  if(recipient === "counter01"){
    for(let i=0; i<courseImages.length; i++) {
        courseImages[i].setAttribute("onclick","counter01(this)");
      }
    }else if(recipient === "counter02"){
    for(let i=0; i<courseImages.length; i++) {
        courseImages[i].setAttribute("onclick","counter02(this)");
      }
      
    } else if(recipient === "counter03"){
      for(let i=0; i<courseImages.length; i++) {
        courseImages[i].setAttribute("onclick","counter03(this)");
      }
  }
  

});

let [box01,box02,box03] = document.getElementsByClassName("course-select-boxes");
let remove1 = document.getElementById("remove-01");
let remove2 = document.getElementById("remove-02");
let remove3 = document.getElementById("remove-03");
function counter01(e) {
  console.log("one");
  if(flag1){
    ++count;
    countSpan.innerHTML = "0" + count;
    flag1 = false;
    removeFlag1 = true;
  }
  attempt1.classList.remove("bg-none");
  attempt1.setAttribute("required","required");
  paper01 = e.getAttribute("value");
  plusBox01.src = e.src;
  remove1.classList.remove("bg-none")
  priceCalc();
  courseModal01.toggle();
  formModal.toggle();
  
}
function counter02(e) {
 
  if(flag2){
  ++count;
  countSpan.innerHTML = "0" + count;
  flag2 = false;
  removeFlag2 = true;
  }
    attempt2.classList.remove("bg-none");
    attempt2.setAttribute("required","required");
    paper02 = e.getAttribute("value");
    plusBox02.src = e.src;
    remove2.classList.remove("bg-none")
    priceCalc();
    courseModal01.toggle();
    formModal.toggle();
    
}
function counter03(e) {
 
  if(flag3){
  ++count;
  countSpan.innerHTML = "0" + count;
  flag3 = false;
  removeFlag3 = true;
  }
    attempt3.classList.remove("bg-none");
    attempt3.setAttribute("required","required");
    paper03 = e.getAttribute("value");
    plusBox03.src = e.src;
    remove3.classList.remove("bg-none")
    priceCalc();
    courseModal01.toggle();
    formModal.toggle();
    
}


function removeCourse01 (e) {
        if(removeFlag1){
          --count;
          countSpan.innerHTML = "0" + count;
          flag1 = true;
          removeFlag1 = false;
        }
        plusBox01.src = "./sources/select-card.png";
        attemptSelect.removeAttribute("required");
        attemptSelect.classList.add("bg-none");
        e.classList.add("bg-none");
        paper01 = "";
        priceCalc();

}
function removeCourse02 (e) {
      if(removeFlag2){
        --count;
        countSpan.innerHTML = "0" + count;
        flag2 = true;
        removeFlag2 = false;
      }
      plusBox02.src = "./sources/select-card.png";
      attempt2Select.removeAttribute("required");
      attempt2Select.classList.add("bg-none");
      e.classList.add("bg-none");
      paper02 = "";
      priceCalc();
}
function removeCourse03 (e) {
  if(removeFlag3){
    --count;
    countSpan.innerHTML = "0" + count;
    flag3 = true;
    removeFlag3 = false;
  }
  plusBox03.src = "./sources/select-card.png";
  attempt3Select.removeAttribute("required");
  attempt3Select.classList.add("bg-none");
  e.classList.add("bg-none");
  paper03 = "";
  priceCalc();
}

let amountBox = document.querySelectorAll(".rupee")[0];

function priceChartFunc() {
  console.log("01" + !(!paper01) +"02" +!(!paper02)+"03"+!(!paper03));
  if(paper01 && paper02){
    if((paper01.substring(0,6) == "CFAP 1" || paper01.substring(0,6) == "CFAP 6") && (paper02.substring(0,6) == "CFAP 1" || paper02.substring(0,6) == "CFAP 6")){
      price = 38000;
    } else if((paper01.substring(0,6) == "CFAP 1" || paper01.substring(0,6) == "CFAP 3") && (paper02.substring(0,6) == "CFAP 1" || paper02.substring(0,6) == "CFAP 3")){
      price = 24000;
    } else if((paper01.substring(0,6) == "CFAP 1" || paper01.substring(0,6) == "CFAP 4") && (paper02.substring(0,6) == "CFAP 1" || paper02.substring(0,6) == "CFAP 4")){
      price = 24000;
    } else if((paper01.substring(0,6) == "CFAP 6" || paper01.substring(0,6) == "CFAP 3") && (paper02.substring(0,6) == "CFAP 6" || paper02.substring(0,6) == "CFAP 3")){
      price = 30000; 
    } else if((paper01.substring(0,6) == "CFAP 6" || paper01.substring(0,6) == "CFAP 4") && (paper02.substring(0,6) == "CFAP 6" || paper02.substring(0,6) == "CFAP 4")){
      price = 30000;
    } else if((paper01.substring(0,6) == "CFAP 3" || paper01.substring(0,6) == "CFAP 4") && (paper02.substring(0,6) == "CFAP 3" || paper02.substring(0,6) == "CFAP 4")){
      price = 21000;
    }
  } else if(paper01 && paper03){
    console.log("hellooo");

    if((paper01.substring(0,6) == "CFAP 1" || paper01.substring(0,6) == "CFAP 6") && (paper03.substring(0,6) == "CFAP 1" || paper03.substring(0,6) == "CFAP 6")){
      price = 38000;
    } else if((paper01.substring(0,6) == "CFAP 1" || paper01.substring(0,6) == "CFAP 3") && (paper03.substring(0,6) == "CFAP 1" || paper03.substring(0,6) == "CFAP 3")){
      price = 24000;
    } else if((paper01.substring(0,6) == "CFAP 1" || paper01.substring(0,6) == "CFAP 4") && (paper03.substring(0,6) == "CFAP 1" || paper03.substring(0,6) == "CFAP 4")){
      price = 24000;
    } else if((paper01.substring(0,6) == "CFAP 6" || paper01.substring(0,6) == "CFAP 3") && (paper03.substring(0,6) == "CFAP 6" || paper03.substring(0,6) == "CFAP 3")){
      price = 30000; 
    } else if((paper01.substring(0,6) == "CFAP 6" || paper01.substring(0,6) == "CFAP 4") && (paper03.substring(0,6) == "CFAP 6" || paper03.substring(0,6) == "CFAP 4")){
      price = 30000;
    } else if((paper01.substring(0,6) == "CFAP 3" || paper01.substring(0,6) == "CFAP 4") && (paper03.substring(0,6) == "CFAP 3" || paper03.substring(0,6) == "CFAP 4")){
      price = 21000;
    }

  } else if(paper02 && paper03){
    if((paper02.substring(0,6) == "CFAP 1" || paper02.substring(0,6) == "CFAP 6") && (paper03.substring(0,6) == "CFAP 1" || paper03.substring(0,6) == "CFAP 6")){
      price = 38000;
    } else if((paper02.substring(0,6) == "CFAP 1" || paper02.substring(0,6) == "CFAP 3") && (paper03.substring(0,6) == "CFAP 1" || paper03.substring(0,6) == "CFAP 3")){
      price = 24000;
    } else if((paper02.substring(0,6) == "CFAP 1" || paper02.substring(0,6) == "CFAP 4") && (paper03.substring(0,6) == "CFAP 1" || paper03.substring(0,6) == "CFAP 4")){
      price = 24000;
    } else if((paper02.substring(0,6) == "CFAP 6" || paper02.substring(0,6) == "CFAP 3") && (paper03.substring(0,6) == "CFAP 6" || paper03.substring(0,6) == "CFAP 3")){
      price = 30000; 
    } else if((paper02.substring(0,6) == "CFAP 6" || paper02.substring(0,6) == "CFAP 4") && (paper03.substring(0,6) == "CFAP 6" || paper03.substring(0,6) == "CFAP 4")){
      price = 30000;
    } else if((paper02.substring(0,6) == "CFAP 3" || paper02.substring(0,6) == "CFAP 4") && (paper03.substring(0,6) == "CFAP 3" || paper03.substring(0,6) == "CFAP 4")){
      price = 21000;
    }
  }
}
function priceCalc () {
  amountBox.innerHTML = "";
  if(count === 1){
    price = 25000;
  } else if (count === 2){
    priceChartFunc();
  } else if(count === 3){
    price = 50000;
  } else if(count === 0) {
    price = 0;
  }
  amountBox.innerHTML = price;
}
function discPriceCalc () {
  amountBox.innerHTML = "";
  if(count === 1){
    price = (price/100)*80;
  } else if (count === 2){
    price = (price/100)*80;
  } else if(count === 3){
    price = (price/100)*80;
  }
  amountBox.innerHTML = price;
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


// cities.addEventListener("change", () => {
//   areas.innerHTML = "";
//   console.log(cities.value);
//   if (cities.value.toLowerCase() === "karachi") {
//     for (let i = 0; i < karachiAreas.length; i++) {
//       areas.innerHTML += `<option value=${areas[i]}>`;
//     }

//   }
// });

const scriptURL =
  "https://script.google.com/macros/s/AKfycbymzWMcM4NTjlThjpKwxfo-_nh5Pp_kILqCHXO4BlwRrzSMOim2nj6lo0d5QajrPljd/exec";
let form = document.forms["registration-form"];
let submitBtn = document.querySelector("#submit-btn");
let loader = document.querySelectorAll(".loader")[0];
let warningSpan = document.getElementById("warning-span");

function resetForm() {
  form.reset();
  count = 0;
  countSpan.innerHTML = 0;
  amountBox.innerHTML = 0;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  warningSpan.innerHTML = "";
  let fName =  document.querySelector("#name").value;
  let  fGuardian = document.getElementById("guardian-name").value;
  let  fPhone = document.getElementById("Phone").value;
  let  fGuardianPhone = document.getElementById("guardian-phone").value;
  let  fCnic = document.getElementById("cnic").value;
  let  fEmail = document.getElementById("e-mail").value;
  let  fState = document.getElementById("province").value;
  let  fCity = document.getElementById("city-input").value;
  let  fArea = document.getElementById("Areas").value;
  let  fPrev = document.getElementById("Previous-college").value;
  let  fCoupon = document.getElementById("coupon").value;
  let  fQualification = document.getElementById("qualification").value;
  let  fCount = count;
  let  fAmount = price;
  let  fAttempt01 = document.getElementById("Attempt").value || document.getElementById("Attempt02").value
  let  fAttempt02 = document.getElementById("Attempt02").value || document.getElementById("Attempt03").value
  let  fAttempt03 = document.getElementById("Attempt03").value || document.getElementById("Attempt").value
  
  let files = inp.files;
  if (files.length > 0) {
    if (files[0].size > 400 * 1024) {
      alert("File Size Exceeds 400kb");
      return false;
    }
  }

  var storageRef = firebase.storage().ref();
  var file = document.querySelector("#ICAP").files[0];
  if(!file){
    warningSpan.innerHTML = "please fill out all fields";
  }
  var name = new Date() + "-" + file.name;
  const metaData = {
    contentType: file.type,
  };

  form["Paper Count"].value = count;
  if(paper01 && paper02 && paper03){
    if((paper01 === paper02) || (paper01 === paper03) || (paper02 === paper03)){
    alert("You Have Selected Same Courses")
    return false;
  }
  
  }


  if(count === 1){
    // loader.classList.remove("dp-none");
    submitBtn.disabled = true;
    form["Paper(s)"].value = paper01 || paper02 || paper03;
    form["Attempt"].value = fAttempt01 || fAttempt02 || fAttempt03;
    storageRef
      .child(name)
      .put(file)
      .then((snapshot) => {
        storageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log("1st");
            form["ICAP Card"].value = url;
            console.log(url);
            console.log(form.Name.value);
            console.log(form.Phone.value);
            console.log(form.Attempt.value);
            console.log(form["ICAP Card"].value);
            console.log(form.Qualification.value);
          })
          .then(() => {
            console.log("2nd");
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                  // loader.classList.add("dp-none");
                  console.log(form["ICAP Card"].value);
                  alert(
                    "Thanks for Contacting us..! We Will Contact You Soon..."
                    )
                    submitBtn.disabled = false;
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
    // loader.classList.remove("dp-none");
    storageRef
    .child(name)
    .put(file)
    .then((snapshot) => {
      storageRef
      .child(name)
      .getDownloadURL()
      .then((url) => {
        console.log("1st");
        submitBtn.disabled = true;
        form.Attempt.value = form.Attempt.value || form.Attempt02.value;
        form["Paper(s)"].value = paper01 || paper02;
        form["ICAP Card"].value = url;
        form["Paper Count"].value = fCount;
        form["Name"].value = fName;
        form["Father/Guardian Name"].value = fGuardian;
        form["Phone"].value = fPhone;
        form["Father/Guardian Phone"].value = fGuardianPhone;
        form["CNIC"].value = fCnic;
        form["Email"].value = fEmail;
        form["State/Province"].value = fState;
        form["City"].value = fCity;
        form["Area/Locality"].value = fArea;
        form["Previous college"].value = fPrev;
        form["Coupon"].value = fCoupon;
        form["Qualification"].value = fQualification;
        form["Amount"].value = fAmount;
        form["Attempt"].value = fAttempt01;
        
          })
          .then(() => {
            console.log("2nd");
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                  console.log(form.Attempt.value);
                //SECOND //
                form.Attempt.value = form.Attempt03.value || form.Attempt02.value;
                form["Paper(s)"].value = paper03 || paper02;
                form["Attempt"].value = fAttempt01;
                // resetForm();
                fetch(scriptURL, {
                    method: "POST",
                    body: new FormData(form),
                  }).then((response) => {
                    // loader.classList.add("dp-none");
                    submitBtn.disabled = false;
                    alert(
                      "Thanks for Contacting us..! We Will Contact You Soon..."
                    )
                    // resetForm();
                  });
              })
              .catch((error) => {
                console.error("Error!", error.message)
                loader.classList.add("dp-none");
                submitBtn.disabled = false;});
                // resetForm();
          })
          .catch((error) => {
            console.error("Error!", error.message)
            // loader.classList.add("dp-none");
            submitBtn.disabled = false;});
            resetForm();
      });
  } else if(count === 3){
    // loader.classList.remove("dp-none");
  // submitBtn.disabled = true;
  storageRef
    .child(name)
    .put(file)
    .then((snapshot) => {
      storageRef
        .child(name)
        .getDownloadURL()
        .then((url) => {
          console.log("FIRIST");
          form["ICAP Card"].value = url;
          form["Paper(s)"].value = paper01;
          form["Attempt"].value = fAttempt01;
        })
        .then(() => {
          console.log("SECOND");
          fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log(form.Attempt.value);
              //SECOND //
              form["Paper(s)"].value = paper02;
              form["Attempt"].value = fAttempt02;
              // resetForm();
              fetch(scriptURL, {
                  method: "POST",
                  body: new FormData(form),
                }).then((response) => {
                    // THIRD //
                    form["Paper(s)"].value = paper03;
                    form["Attempt"].value = fAttempt03;
                    // resetForm();
                fetch(scriptURL, { method: "POST", body: new FormData(form) })
                  .then((response) =>{
                    // loader.classList.add("dp-none");
                    // submitBtn.disabled = false;
                    alert(
                      "Thanks for Contacting us..! We Will Contact You Soon..."
                    );
                    // resetForm();
                  }
                  )
                  .catch((error) => {
                    console.error("Error!", error.message)
                    // loader.classList.add("dp-none");
                    // submitBtn.disabled = false;
                    // resetForm();
                  });
              });
            })
            .catch((error) => {
              console.error("Error!", error.message)
              // loader.classList.add("dp-none");
              // submitBtn.disabled = false;
              // resetForm();
            });
        })
        .catch((error) => {
          console.error("Error!", error.message)
          // loader.classList.add("dp-none");
          // submitBtn.disabled = false;
          // resetForm();
        });
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



