//reset number
number = 10;
a      = 1;
b      = 2;
n      = 3;
function add() {
  return (number += 5);
}

function subtract(){
    return (number -= 2);
}

function multiply(){
    return (number *= 3);
}

function divide(){
  return (number /= 3);
}

function add(a,b){
    return (a+=b);
}

function subtract(a,b){
    return(a -= b);
}
function multiply(a,b){
    return(a*=b);
}
function divide(a,b){
    return(a/=b);
}

function increment(n){
    return (n+1);
}

function decrement(n){
    return (n-1);
}

function makeInt(n) {
    const parsed = parseInt(n,10);
    if (isNaN(parsed)) { return n; }
    return parsed;
}

function preserveDecimal(n){
    const parsed = parseFloat(n);
    if (isNaN(parsed)) { return n; }
    return parsed;
}
