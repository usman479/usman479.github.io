

const check = () => {
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");
    let number2 = number;
    let r = 1;
    let sum = 0;
    let power = 0;

    for (let i = 0; i <= 10; i++) {
        if (number2 != 0) {
            r = number2 % 10;
            power++;
            number2 = Math.floor(number2 / 10);
    
        } else {
            break;
        }
    }
    
    number2 = number;
    
    
    for (let i = 0; i <= 10; i++) {
        if (number2 != 0) {
            r = number2 % 10;
            sum += r ** power
            number2 = Math.floor(number2 / 10);
    
    
        } else {
            break;
        }
    }
    
    sum == number ? result.style.color = "green" : result.style.color = "red";
    sum == number ? result.innerText = "This is an Armstrong number" : result.innerText = "This is not an Armstrong number";

}


