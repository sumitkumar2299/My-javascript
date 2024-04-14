//difference between function and anonymus function 

function sumit(){
    console.log("sumit");
}
sumit();



//anonymus function 
const myfunction = function(){
    console.log("sumit");
}
myfunction();



function iseven(a){
    if(a%2===0){
        console.log("true");
    }
    else{
        console.log("false");
    }
    return iseven;
}
iseven(8);




// in function we can also pass an array as an argument 

function PassingArray([num1,num2]){
    return num1+num2;
}
PassingArray([5,8]);
console.log(PassingArray([5,8]));


//by using loop we can pass unlimited number  of parameters.


function sumOfAllParameter(){
    let sum = 0;
    for(var i =0;i<=arguments.length;i++){
        return sum;
    }
}
let result = sumOfAllParameter(1,2,3,4,5);
console.log(result);



