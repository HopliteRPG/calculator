let firstNumber = 16;
let secondNumber = 4;
let operand = "+";


function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(operand,firstNumber,secondNumber){
    if(operand === "+"){
        return add(firstNumber,secondNumber);
    }
    else if(operand === "-"){
        return subtract(firstNumber,secondNumber);
    }
    else if(operand === "*"){
        return multiply(firstNumber,secondNumber);
    }
    else if(operand === "/"){
        return divide(firstNumber,secondNumber);
    }
}

console.log(operate(operand,firstNumber,secondNumber));