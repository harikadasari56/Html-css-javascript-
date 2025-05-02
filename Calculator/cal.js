let result = document.getElementById("result");
let number_btns = document.getElementsByClassName("number");
let operator_btns = document.getElementsByClassName("operator");
let clear_btn = document.getElementById("clear");
let ans_btn = document.getElementById("answer");
let currInput = "";
let operator = null;
let firstNumber = null;

for (let btn of number_btns) {
    btn.addEventListener("click", () => {
        currInput = currInput + btn.innerText;
        result.value = currInput;
    });
}

for (let op of operator_btns) {
    op.addEventListener("click", () => {
        if (currInput !== "") {
            firstNumber = Number(currInput);
            operator = op.innerText;
            currInput = "";
            result.value = firstNumber + operator;
        }
    });
}

ans_btn.addEventListener("click", () => {
    if (currInput !== "" && operator !== null && firstNumber !== null) {
        let secondNumber = Number(currInput);
        let value;
        switch (operator) {
            case "+":
                value = firstNumber + secondNumber;
                break;
            case "-":
                value = firstNumber - secondNumber;
                break;
            case "*":
                value = firstNumber * secondNumber;
                break;
            case "/":
                value = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
                break;
            case "%":
                value = firstNumber % secondNumber;
                break;
            default:
                value = "Invalid";
        }
        result.value = value;
        currInput = value.toString(); S
        operator = null;
        firstNumber = null;
    }
});

clear_btn.addEventListener("click", () => {
    currInput = "";
    operator = null;
    firstNumber = null;
    result.value = "0";
});
