const change = () => {
    const val = document.getElementById("inpVal").value;
    const image = document.getElementById("image");
    let gender = document.getElementsByName("gender");
    let gend = undefined;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gend = gender[i].value;
        }
    }
    if (val === "") {
        alert("Please enter your Name")
    } else if (gend === undefined) {
        alert("Select your Gender")
    }
    else if (gend === "male") {
        image.setAttribute("src", `https://joeschmoe.io/api/v1/male/${val}`);
        image.setAttribute("alt", "your avatar");
        image.style.width = "100%"
    } else if (gend === "female") {
        image.setAttribute("src", `https://joeschmoe.io/api/v1/female/${val}`);
        image.setAttribute("alt", "your avatar");
        image.style.width = "100%"
    }

}