
let factorial = 1;
for(let i = 1; i<=5; i++){
    factorial = factorial * i;
}
console.log(factorial);


// ===-----------------
var factorial = num;
for(var i =1; i<=num; i++){
    fact = factorial *i;
}
console.log(fact);




// ---------------


function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i<=number; i++){
        factorial = factorial * i;
    }
    return factorial;
   
}

var firstFactorial = getFactorial(7);
console.log('factorial of 7 is', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('Factorial of 9 is', secondFactorial);