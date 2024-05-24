let firstNumber; 
let secondNumber; 
let operator;   
let resultHtml = document.querySelector(".result-html");
let placeholderResult = "";
let resultNum = 0;

let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let clearButton = document.querySelector(".clear-button");
let operateButton = document.querySelector(".operate-button")

        numberButtons.forEach((numberButton) => {
            numberButton.addEventListener("click", () => {
                placeholderResult += numberButton.value;
                resultHtml.innerText = placeholderResult;
                console.log(placeholderResult);
              });
        });

        operatorButtons.forEach((operatorButton) => {
            operatorButton.addEventListener("click", () => {
                if (!isNaN(placeholderResult[placeholderResult.length-1])){
                    placeholderResult += operatorButton.value;
                    resultHtml.innerText = placeholderResult;
                    console.log(placeholderResult);
                }    
              });
        });
    

        clearButton.addEventListener("click",()=>{
            firstNumber = 0; 
            secondNumber = 0; 
            operator = "";  
            placeholderResult = "";
            resultNum = 0;
            resultHtml.innerText = "";
            console.log(placeholderResult);
        });

        operateButton.addEventListener("click",()=>{
        const splitArray = placeholderResult.split(/([+\-*/])/);
        console.log(placeholderResult);
        console.log(splitArray);
          
        firstNumber = splitArray.shift();
        operator = splitArray.shift();
        secondNumber = splitArray.shift();
        
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        
        console.log(firstNumber);
        console.log(operator);
        console.log(secondNumber);
          
        resultNum = operate(operator,firstNumber, secondNumber);
        if(resultNum === Infinity){
            resultHtml.innerText = "0";
            placeholderResult = "";
            resultNum = 0;
            placeholderResult += resultNum;

        }
        else if(!isNaN(resultNum)){
            resultHtml.innerText = resultNum;

            placeholderResult = "";
    
            placeholderResult += resultNum;
        }
        else{
            alert("Enter valid equation")
            resultHtml.innerText = "";
            placeholderResult = "";
        }
        




        });

function resetInformation(){
    
}

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