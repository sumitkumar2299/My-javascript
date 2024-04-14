//arrow function is alternative way of declearing of a function.
//the main intention of an arrow function is to write less get more.


function add(a,b){
    console.log("inside the add function");
    return a+b;
}
console.log(add(5,6));


// in arrow function there is no function keyword.
const add1 = (a,b) => {
    console.log("inside the add function");
    return a+b;

}
console.log(add1(6,9));



const hello = () => {
    console.log("hello students");
}
hello();


const sum_three = (a,b,c) => {
    return a+b+c;
}
sum_three(5,8,4);
console.log(sum_three(5,8,4));


greet = (name) => {
    console.log("hello " +name);
}
greet('sumit');


//limitation of an arrow function
//can't acess the argument objects.
//can't have the variable number of arguments.
