const display = document.querySelector("#display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function deleteOne(input){
    display.value = display.value.substring(0, display.value.length - 1);
}
