let firstNumber; 
let secondNumber; 
let operator;   
let resultHtml = document.querySelector(".result-html");
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
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.two.twoButton.addEventListener("click", ()=> {
    placeholderResult += "2";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);

});
numberButtons.three.threeButton.addEventListener("click", ()=> {
    placeholderResult += "3";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.four.fourButton.addEventListener("click", ()=> {
    placeholderResult += "4";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.five.fiveButton.addEventListener("click", ()=> {
    placeholderResult += "5";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.six.sixButton.addEventListener("click", ()=> {
    placeholderResult += "6";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.seven.sevenButton.addEventListener("click", ()=> {
    placeholderResult += "7";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.eight.eightButton.addEventListener("click", ()=> {
    placeholderResult += "8";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.nine.nineButton.addEventListener("click", ()=> {
    placeholderResult += "9";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.zero.zeroButton.addEventListener("click", ()=> {
    placeholderResult += "0";
    resultHtml.innerText = placeholderResult;
    console.log(placeholderResult);
});
numberButtons.add.addButton.addEventListener("click", ()=> {
    if (!isNaN(placeholderResult[placeholderResult.length-1])){
        placeholderResult += "+";
        resultHtml.innerText = placeholderResult;
        console.log(placeholderResult);
    }


});
numberButtons.subtract.subtractButton.addEventListener("click", ()=> {
    if (!isNaN(placeholderResult[placeholderResult.length-1])){
        placeholderResult += "-";
        resultHtml.innerText = placeholderResult;
        console.log(placeholderResult);
    }
});
numberButtons.multiply.multiplyButton.addEventListener("click", ()=> {
    if (!isNaN(placeholderResult[placeholderResult.length-1])){
        placeholderResult += "*";
        resultHtml.innerText = placeholderResult;
        console.log(placeholderResult);
    }
});
numberButtons.divide.divideButton.addEventListener("click", ()=> {
    if (!isNaN(placeholderResult[placeholderResult.length-1])){
        placeholderResult += "/";
        resultHtml.innerText = placeholderResult;
        console.log(placeholderResult);
    }
});
numberButtons.clear.clearButton.addEventListener("click", ()=> {
   firstNumber = 0; 
   secondNumber = 0; 
   operator = "";  
   placeholderResult = "";
   resultNum = 0;
   placeholderResult = "";
   resultHtml.innerText = ""
   console.log(placeholderResult);
});
numberButtons.operate.operateButton.addEventListener("click", ()=> {
const splitArray = placeholderResult.split(/([+\-*/])/);
console.log(placeholderResult)
console.log(splitArray)
  
firstNumber = splitArray.shift()
operator = splitArray.shift()
secondNumber = splitArray.shift()

firstNumber = parseInt(firstNumber)
secondNumber = parseInt(secondNumber)

console.log(firstNumber)
console.log(operator)
console.log(secondNumber)
  
resultNum = operate(operator,firstNumber, secondNumber);
resultHtml.innerText = resultNum;





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
