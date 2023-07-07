function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstnum;
let operator;
let secondnum; //check this later, might cause problems
let displaynum = 0;

function operate(num1, operator, num2) {
    if (operator === '+') {
        add(num1, num2);
    }
    else if (operator === '-') {
        subtract(num1, num2);
    }
    else if (operator === '*') {
        multiply(num1, num2);
    }
    else if (operator === '/') {
        divide(num1, num2);
    }
}

const results = document.querySelector('.results');
const number = document.querySelectorAll('.number');
const Coperator = document.querySelector('.Coperator');
const divoperator = document.querySelector('.divoperator');
const multoperator = document.querySelector('.multoperator');
const minoperator = document.querySelector('.minoperator');
const addoperator = document.querySelector('.addoperator');
const equaloperator = document.querySelector('.equaloperator');

for(let i=0; i< number.length; i++) {
    number[i].addEventListener('click', display);
}

Coperator.addEventListener('click', display);

function display(e) {
    if(results.textContent === '0' && number || results.textContent === '+') {
        results.textContent = e.target.innerText;
    }
    else{
        results.textContent += e.target.innerText;
    }
    if(e.target.innerText === 'C') {
        results.textContent = '0';
    }
}
