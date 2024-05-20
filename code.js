let firstNumber = 16;
let secondNumber = 4;
let operator = "+";
let result = document.querySelector(".result-html");
let placeholder;

const numberButtons = {
    one: {
        oneButton: document.querySelector(".one-button")
    },
    two: {
        twoButton: document.querySelector(".two-button")
    },
    three: {
        threeButton: document.querySelector(".three-button")
    },
    four: {
        fourButton: document.querySelector(".four-button")
    },
    five: {
        fiveButton: document.querySelector(".five-button")
    },
    six: {
        sixButton: document.querySelector(".six-button")
    },
    seven: {
        sevenButton: document.querySelector(".seven-button")
    },
    eight: {
        eightButton: document.querySelector(".eight-button")
    },
    nine: {
        nineButton: document.querySelector(".nine-button")
    },
    zero: {
        zeroButton: document.querySelector(".zero-button")
    },
    add: {
        addButton: document.querySelector(".add-button")
    },
    subtract: {
        subtractButton: document.querySelector(".subtract-button")
    },
    multiply: {
        multiplyButton: document.querySelector(".multiply-button")
    },
    divide: {
        divideButton: document.querySelector(".divide-button")
    },
    clear: {
        clearButton: document.querySelector(".clear-button")
    },
    operate: {
        operateButton: document.querySelector(".operate-button")
    }
}




numberButtons.one.oneButton.addEventListener("click", ()=> {
    result.innerText += "1";
});
numberButtons.two.twoButton.addEventListener("click", ()=> {
    result.innerText += "2";
});
numberButtons.three.threeButton.addEventListener("click", ()=> {
    result.innerText += "3";
});
numberButtons.four.fourButton.addEventListener("click", ()=> {
    result.innerText += "4";
});
numberButtons.five.fiveButton.addEventListener("click", ()=> {
    result.innerText += "5";
});
numberButtons.six.sixButton.addEventListener("click", ()=> {
    result.innerText += "6";
});
numberButtons.seven.sevenButton.addEventListener("click", ()=> {
    result.innerText += "7";
});
numberButtons.eight.eightButton.addEventListener("click", ()=> {
    result.innerText += "8";
});
numberButtons.nine.nineButton.addEventListener("click", ()=> {
    result.innerText += "9";
});
numberButtons.zero.zeroButton.addEventListener("click", ()=> {
    result.innerText += "0";
});
numberButtons.add.addButton.addEventListener("click", ()=> {
    result.innerText += "+";
});
numberButtons.subtract.subtractButton.addEventListener("click", ()=> {
    result.innerText += "-";
});
numberButtons.multiply.multiplyButton.addEventListener("click", ()=> {
    result.innerText += "*";
});
numberButtons.divide.divideButton.addEventListener("click", ()=> {
    result.innerText += "/";
});
numberButtons.clear.clearButton.addEventListener("click", ()=> {
    result.innerText = "";
});
numberButtons.operate.operateButton.addEventListener("click", ()=> {
});

//Math Functions
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

function operate(operator,firstNumber,secondNumber){
    if(operator === "+"){
        return add(firstNumber,secondNumber);
    }
    else if(operator === "-"){
        return subtract(firstNumber,secondNumber);
    }
    else if(operator === "*"){
        return multiply(firstNumber,secondNumber);
    }
    else if(operator === "/"){
        return divide(firstNumber,secondNumber);
    }
}

console.log(operate(operator,firstNumber,secondNumber));