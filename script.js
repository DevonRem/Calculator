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

function operate(num1, operator, num2) {
    if (operator === '+') {
        return +num1 + +num2;
    }
    else if (operator === '-') {
        return num1 - num2;;
    }
    else if (operator === '*') {
        return num1 * num2;;
    }
    else if (operator === '/') {
        return num1 / num2;;
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

Coperator.addEventListener('click', () => {
    results.textContent = '';
});
divoperator.addEventListener('click', display);
multoperator.addEventListener('click', display);
minoperator.addEventListener('click', display);
addoperator.addEventListener('click', display);
equaloperator.addEventListener('click', display);

let firstnum; 
let operator;
let secondnum = ''; 
let displaynum = 0;
let resultnum;
let gotfirst = false;
let tempop = '';
let gotfirst2 = false

function display(e) {

    if(e.target.innerText === '=' && firstnum !== '' && secondnum !== '' && tempop === '+') {
        results.textContent = operate(secondnum, '+', firstnum);
        gotfirst = false;
        gotfirst2 = false;
        firstnum = '';
        secondnum = '';
    }
    else if(e.target.innerText === '=' && firstnum !== '' && secondnum !== '' && tempop === '-') {
        results.textContent = operate(secondnum, '-', firstnum);
        gotfirst = false;
        gotfirst2 = false;
        firstnum = '';
        secondnum = '';
    }
    else if(e.target.innerText === '=' && firstnum !== '' && secondnum !== '' && tempop === '*') {
        results.textContent = operate(secondnum, '*', firstnum);
        gotfirst = false;
        gotfirst2 = false;
        firstnum = '';
        secondnum = '';
    }
    else if(e.target.innerText === '=' && firstnum !== '' && secondnum !== '' && tempop === '/') {
        results.textContent = operate(secondnum, '/', firstnum);
        gotfirst = false;
        gotfirst2 = false;
        firstnum = '';
        secondnum = '';
    }

    else if(gotfirst2 === false && number && secondnum === '') {
        results.textContent = e.target.innerText;
        firstnum = results.textContent; 
        gotfirst2 = true;
    }
    else if(firstnum && e.target.innerText === '+'){
        secondnum = firstnum;
        tempop = '+'; 
        results.textContent = secondnum;

    }
    else if(firstnum && e.target.innerText === '-'){
        secondnum = firstnum;
        tempop = '-'; 
        results.textContent = secondnum;
    }
    else if(firstnum && e.target.innerText === '/'){
        secondnum = firstnum;
        tempop = '/'; 
        results.textContent = secondnum;
    }
    else if(firstnum && e.target.innerText === '*'){
        secondnum = firstnum;
        tempop = '*'; 
        results.textContent = secondnum;
    }
    else if (secondnum === '' && gotfirst2 === true) {
        results.textContent += e.target.innerText;
        firstnum = results.textContent;
    }
    else if(secondnum !== '' && gotfirst === true) {
        results.textContent += e.target.innerText;
        firstnum = results.textContent;
    }
    else if(secondnum !== '') {
        results.textContent = e.target.innerText;
        firstnum = results.textContent; 
        gotfirst = true;
    }

    




}



