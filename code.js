let firstNumber; 
let secondNumber; 
let operator;   
let resultHtml = document.querySelector(".result-html");
let placeholderResult = "";
let resultNum = 0;
let doesOperatorExist = false;
let resultOnScreen = false;

let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let clearButton = document.querySelector(".clear-button");
let operateButton = document.querySelector(".operate-button")

        numberButtons.forEach((numberButton) => {
            numberButton.addEventListener("click", () => {
                if(doesOperatorExist === false && resultOnScreen === true){
                    
                }
                else{
                    placeholderResult += numberButton.value;
                    resultHtml.innerText = placeholderResult;
                    console.log(placeholderResult);
                }

              });
        });

        operatorButtons.forEach((operatorButton) => {
            operatorButton.addEventListener("click", () => {
                if (doesOperatorExist === false && !isNaN(placeholderResult[placeholderResult.length-1]) && !placeholderResult.includes("+") && !placeholderResult.includes("-") && !placeholderResult.includes("*") && !placeholderResult.includes("/")){  
                    
                    if(isNaN(firstNumber)){
                        operator = operatorButton.value;
                        firstNumber = placeholderResult
                        placeholderResult = "";
                        resultHtml.innerText = "";
                        doesOperatorExist = true;
                        resultOnScreen = false;

                    }

                    else if(!isNaN(firstNumber)){
                        operator = operatorButton.value;
                        placeholderResult = "";
                        resultHtml.innerText = "";
                        doesOperatorExist = true;
                    }
                }    
              });
        });
    

        clearButton.addEventListener("click",()=>{
            firstNumber = NaN;
            secondNumber = NaN; 
            operator = "";  
            placeholderResult = "";
            resultNum = "";
            resultHtml.innerText = "";
            doesOperatorExist = false;
            resultOnScreen = false;
            console.log(placeholderResult);
        });

        operateButton.addEventListener("click",()=>{
          

        secondNumber = placeholderResult;
        
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        
        console.log(firstNumber);
        console.log(operator);
        console.log(secondNumber);
          
        resultNum = operate(operator,firstNumber, secondNumber);
        if(resultNum === Infinity || resultNum === -Infinity){
            resultHtml.innerText = "0";
            placeholderResult = "";
            resultNum = 0;
            placeholderResult += resultNum;
            doesOperatorExist = false;
            operator = "";
            firstNumber = resultNum;

        }
        else if(!isNaN(resultNum)){
            resultHtml.innerText = resultNum;
            doesOperatorExist = false;
            operator = "";
            firstNumber = resultNum;
            resultOnScreen = true;
        }
        else{
            alert("Enter valid equation")
            firstNumber = NaN;
            secondNumber = NaN; 
            operator = "";  
            placeholderResult = "";
            resultNum = "";
            resultHtml.innerText = "";
            doesOperatorExist = false;  
            resultOnScreen = false;


        }
        




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