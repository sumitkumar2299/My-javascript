// allow admin to fetch user details.
isadmin = false; 
if(isadmin){
    console.log("fetch user details");
} 
else{
    console.log("this operation is only for admins");
}



let name = "sumit";
name.toUpperCase();
console.log(name.toUpperCase);
console.log(name);




//we can use ternary operator to check for multiple condition at once.

let x = 5, y = 6;
let result =  (x > 0 && y > 0) ? 'Both are positive' :  
(x > 0 || y > 0) ? 'At least one is positive' :  
"neither is false";




