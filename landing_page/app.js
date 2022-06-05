// SLIDER //
var slider = document.querySelector(".form-slider");
var toggle = document.getElementsByClassName("toggle")
for(let i=0; i < toggle.length; i++){
toggle[i].addEventListener("click", toggleSlider, true);
}
      

      function toggleSlider() {
        if (slider.classList.contains("opened")) {
          slider.classList.remove("opened");
          slider.classList.add("closed");
          slider.classList.add("dp-none")
        } else {
            slider.classList.remove("closed");
            slider.classList.add("opened");
            slider.classList.remove("dp-none")
        }
      }

const scriptURL ="https://script.google.com/macros/s/AKfycbxngfvVQfWAr-XpcDx6oMnw9LhzlX-EzsElea20jYqpFhLaO16juRhMrSCzQts0fMGEtA/exec";
const form = document.forms["registration-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
