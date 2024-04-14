//in javascript exceptional and error handling is same.
//error is an object that contains details about error. 
//syntax error
// console.log("hello); //syntax error 



/*
//runtime error

let x = 5;
console.log(x.toUppercase());
*/

/*
let x = 25;
let y = 0;
let res = x/y;//mathematically not possible
console.log(res);
*/


/*
//logical error

let i = 5;
while(i>=0){
    console.log("hello students");//infinite loop
}
*/


//you can handle the error in javascript using try and catch 


console.log("i am at the first line");
try{
    let x = 5;
console.log(x.toUppercase());
}catch(err){
    console.log("error has been handled, please proceed");

    //you can also find what is in the error. 


console.log(err);
}finally{
    console.log("i will get invoked always");
}


console.log("i am at the last line");

