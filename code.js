let firstNumber; //Placeholder for testing
let secondNumber; //Placeholder for testing
let operator;   //Placeholder for testing
let result = document.querySelector(".result-html");
let placeholderResult = "";
let resultNum = 0;
        
                                     
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
    placeholderResult += "1";
    console.log(placeholderResult);
});
numberButtons.two.twoButton.addEventListener("click", ()=> {
    placeholderResult += "2";
    console.log(placeholderResult);

});
numberButtons.three.threeButton.addEventListener("click", ()=> {
    placeholderResult += "3";
    console.log(placeholderResult);
});
numberButtons.four.fourButton.addEventListener("click", ()=> {
    placeholderResult += "4";
    console.log(placeholderResult);
});
numberButtons.five.fiveButton.addEventListener("click", ()=> {
    placeholderResult += "5";
    console.log(placeholderResult);
});
numberButtons.six.sixButton.addEventListener("click", ()=> {
    placeholderResult += "6";
    console.log(placeholderResult);
});
numberButtons.seven.sevenButton.addEventListener("click", ()=> {
    placeholderResult += "7";
    console.log(placeholderResult);
});
numberButtons.eight.eightButton.addEventListener("click", ()=> {
    placeholderResult += "8";
    console.log(placeholderResult);
});
numberButtons.nine.nineButton.addEventListener("click", ()=> {
    placeholderResult += "9";
    console.log(placeholderResult);
});
numberButtons.zero.zeroButton.addEventListener("click", ()=> {
    placeholderResult += "0";
    console.log(placeholderResult);
});
numberButtons.add.addButton.addEventListener("click", ()=> {
    placeholderResult += "+";
    console.log(placeholderResult);
});
numberButtons.subtract.subtractButton.addEventListener("click", ()=> {
    placeholderResult += "-";
    console.log(placeholderResult);
});
numberButtons.multiply.multiplyButton.addEventListener("click", ()=> {
    placeholderResult += "*";
    console.log(placeholderResult);
});
numberButtons.divide.divideButton.addEventListener("click", ()=> {
    placeholderResult += "/";
    console.log(placeholderResult);
});
numberButtons.clear.clearButton.addEventListener("click", ()=> {
    placeholderResult = "";
    console.log(placeholderResult);
});
numberButtons.operate.operateButton.addEventListener("click", ()=> {
const splitArray = placeholderResult.split(/([+\-*/])/);
console.log(placeholderResult)
console.log(splitArray)
  
firstNumber = splitArray.shift()
operator = splitArray.shift()
secondNumber = splitArray.shift()

console.log(firstNumber)
console.log(operator)
console.log(secondNumber)
  
resultNum = operate(operator,firstNumber, secondNumber);
result.innerText = resultNum


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

//console.log(operate(operator,firstNumber,secondNumber));