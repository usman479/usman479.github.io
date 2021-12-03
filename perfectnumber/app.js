

const check = () => {
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");
    let number2 = number;
    let sum = 0;

    for (let i = 1; i <= number2/2; i++) {
        if (number % i == 0) {
           sum = sum + i
    
        } 
    }
    
    
    
    sum == number ? result.style.color = "green" : result.style.color = "red";
    sum == number ? result.innerText = "This is a perfect number" : result.innerText = "This is not a perfect number";

}


