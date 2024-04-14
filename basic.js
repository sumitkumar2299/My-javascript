//introduction to javascript 
//primitive and non primitive data type 
//things you have to remember infinity and nan.
//difference between null and undefined.


//string interpolation:-
let name = "sumit";
let full_name = `${name}kumar`;
console.log(full_name);


let school = "s.v.m patna ";
let details = `i am reading in ${school}`;
console.log(details);


let x = 5;
let y = 4;
let result = `the sum of ${x} and ${y} is ${x+y}`;
console.log(result);
let sum = `the sum of ${x} and ${y}`
console.log(sum);


//typeof operator -> it is used to check data type of a given variable.
var student_name = "sumit kumar";
var rollno =  5;
console.log(typeof student_name);
console.log(typeof rollno);


//use of ternary operator.
var isTheUserLoggedIn = true;
isTheUserLoggedIn ? console.log("pw skills lab acess granted") :console.log("pw skills lab acess denied");


//operators 
var num1 = 5;
var num2 = 4;
var add = num1+num2;
var sub =  num1-num2;
var mul =  num1*num2;
var div =  num1/num2;
var mod = num1%num2;
console.log(add,sub,mul,div,mod);

//in javascript the ++ operator is used for both pre increment and post increment.
var PreIncrement = num1++;
var PostIncrement = num1++;
console.log(PostIncrement,PreIncrement);

//adding two number will return a sum but adding a number and string will return a string.

