function wish() {
    console.log("i am sumit kumar");
    console.log("good morning");
}
wish();

//addition of a two number using function 
function add(num1,num2) {
    sum = a+b;
    return sum;
}
let a =5;
let b = 4;
add(5,4);
console.log(add(5,4));

//anonymus function
let sumit  = function desires(){
    console.log("believe in yourself");
    console.log("never lose your confidence");
    return;
}
sumit();
//whenever vaariable is assigned to a function can't be called directly.here decleration of function name is optional.
//whenever we see function has no name then the function is called anonymus function. 

function operate(a,b,fn){
    console.log(fn(a,b));
}
function sum2(a,b){
    return a+b;
}
operate(5,6,sum2)

//first class citizen
//there are three condition of first class citizen
//assigned to a variable 
//can be passed as an argument 
//function can be returned from a function.

const hello_func = function(){
    console.log("hello i am sumit!");
}
hello_func();



function sum1(){
    console.log(arguments)
 
    let sum1 =0 
    for(i=0;i<arguments.length;i++){
     sum1 = sum1 + arguments[i]
    }
    return sum1
 }
 
 console.log(sum1(5,6));
 
 console.log(sum1(5,6,7,8));


function sub(){
    console.log(arguments);

    let sub = 0;
        for(i=0;i<arguments.length;i++){
            sub = sub-arguments[i]
        }
        return sub;
    
}
console.log(sub(6,5));












