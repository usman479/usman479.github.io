

function check() {
    let ran = Math.random() * 10 + 1;
    let finalNum = Math.floor(ran);
    let d = document.getElementById("inp");
    let r = document.getElementById("right");
    let y = document.getElementById("main-result")
    if (Number(d.value) === finalNum) {
        r.innerHTML = "Right"
        r.style.color = "green"
        d.value = ""
        y.innerHTML = "Correct Number is: " + finalNum;
    } else {
        r.innerHTML = "Try again"
        r.style.color = "red"
        y.innerHTML = "Correct Number is: " + finalNum;
        d.value = "";
    }
}

