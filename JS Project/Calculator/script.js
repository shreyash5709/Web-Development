let display = document.querySelector('input[name="display"]');
let buttons = document.querySelectorAll('#buttons .fnc, #buttons .num');

const operators = {
    divide: "÷",
    xmark: "×",
    minus: "-",
    plus: "+"
};

let isOpenParen = true;

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        let value = button.textContent.trim();
        let btnId = button.id;

        switch(btnId){
            case "c":
                display.classList.remove("center");
                display.value = "";
                return;
            
            case "delete":
                display.value = display.value.slice(0,-1);
                updataParenState();
                return;
            
            case "equals":
                calculateResult();
                return;

            case "percent":
                percentHandle();
                return;

            case "dot":
                handleDecimal();
                return;

            default:
                if(operators[btnId]){
                    handleOperators(operators[btnId]);
                }
                else if(value==="()"){
                    handleParenthesis();
                }
                else if(value.match(/\d/)){
                    handleNumber(value);
                }
        }
    });
});

function updataParenState(){
    display.classList.remove("center");
    let expression = display.value;
    let openCount = (expression.match(/\(/g) || []).length;
    let closeCount = (expression.match(/\)/g) || []).length;
    isOpenParen = openCount <= closeCount;
}

function handleParenthesis() {
    let expression = display.value;
    
    if (isOpenParen) {
        // Opening parenthesis add karo
        handleOpenParenthesis(expression);
    } else {
        // Closing parenthesis add karo
        handleCloseParenthesis(expression);
    }
}

function handleOpenParenthesis(expression){
    let lastChar = expression.slice(-1);
    if (lastChar.match(/[\d\)]/)) {
        display.value += "×(";
    } 
    else {
        display.value += '(';
    }
    isOpenParen = false;
}

function handleCloseParenthesis(expression){
    let lastChar = expression.slice(-1);
    let openCount = (expression.match(/\(/g) || []).length;
    let closeCount = (expression.match(/\)/g) || []).length;
    
    if (openCount > closeCount) {
        display.value += ')';
        isOpenParen = openCount === closeCount + 1;
    }
}

function handleDecimal(){
    let expression = display.value;
    
    if(expression === ""){
        display.value = "0.";
        return;
    }
    
    let lastChar = expression.slice(-1);
    
    // Agar last character operator hai ya opening parenthesis
    if("÷×+-(".includes(lastChar)){
        display.value += '0.';
        return;
    }
    
    // Last number find karo
    let numbers = expression.split(/[\÷\×\+\-\(\)]/);
    let lastNumber = numbers[numbers.length - 1];
    
    // Agar last number mein decimal nahi hai
    if(lastNumber && !lastNumber.includes('.')){
        display.value += '.';
    }
}

function percentHandle(){
    let lastChar = display.value.slice(-1);
    if (lastChar.match(/\d/)) {
        display.value += "%";
    }
}

function handleOperators(operator){
    let lastChar = display.value.slice(-1);
    if("÷×+-".includes(lastChar)){
        display.value = display.value.slice(0, -1) + operator;
    }
    else{
        display.value += operator;
    }
}

function handleNumber(value){
    let lastChar = display.value.slice(-1);

    if(value=="." && display.value.match(/(\d+\.\d*)$/)) {
        return;
    }

    if(lastChar==="%"){
        display.value += "×";
    }

    if(lastChar===')'){
        display.value += "×";
    }

    if (value === '0' && (display.value === "0" || display.value === "")) {
        return;
    }

    display.value += value;
}

function calculateResult(){
    try{
        if(!display.value) return; // empty display

        let expression = display.value
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/(\d+(\.\d+)?)%/g, '($1/100)');

        if (/[^\d\*\/\+\-\.\(\)]/.test(expression)) {
            throw new Error('Invalid characters');
        }
        let result = eval(expression);

        if (!isFinite(result)) {
            throw new Error('Invalid calculation');
        }

        display.value = result;
    }
    catch(error){
        display.classList.add("center");
        display.value = "ERROR!";
    }
}