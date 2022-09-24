const scriptURL = "https://script.google.com/macros/s/AKfycbxonZpLVkKEILkKUHARz_kYdB5Q5Tv67ETp2vqTxizEKLedf0PZ7DObh5_wrBcuDyw6zg/exec";

document.getElementsByName("my-form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let form = document.forms["my-form"];
    let submitBtn = document.getElementsByClassName("form-btn")[0];
    submitBtn.disabled = true;
    submitBtn.classList.add("disabled-button");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                submitBtn.disabled = false;
                submitBtn.classList.remove("disabled-button");
                fireSweetAlert("Thanks!",'for contacting us!','success');
                form.reset();
              })
              .catch((error) => {
                submitBtn.disabled = false;
                submitBtn.classList.remove("disabled-button");
                fireSweetAlert("Failed!",'please submit again!','error');
              });
    
})

function fireSweetAlert(head,message,type) {
    Swal.fire(
        head,
        message,
        type
    )
}

