const scriptURL = "https://script.google.com/macros/s/AKfycbz7FVPKhZ2fugHy8OjI3lJzzdlNc4LuJYDESj8FIMdk_nbxDYHwg6AG8uaUKOP09ddO/exec";

document.getElementsByName("contact-form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let form = document.forms["contact-form"];
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
