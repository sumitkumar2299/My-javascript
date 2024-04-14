/*

const arr = [5,4,2,3,1];
console.log(arr.length);//note it start counting from one. 

//another way to define an array. 

let numbers = new Array(1,2,3,4,5,6,7);
console.log(numbers[0]);
console.log(numbers[3]);



//another way to define an array. 


let colors = Array("black", "red", "white", " ");
console.log(colors[3]);

*/





/*
//changing value in an array. 

let arr = [1,2,3,4,56]; 
console.log(arr[1]);
arr[1] = 5;
console.log(arr[1]);


//deletion of an array 

delete arr[2];
console.log(arr);

*/



/*

//important things to remember => In JavaScript, the delete keyword is used to delete a 
property from an object, including an array element. 
However, using delete to remove elements from an array 
can lead to unexpected behaviour and introduce 
problems


*/




//array iteration 

let arr = [1,2,3,4,5,6];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}