/*

let fruits  = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits);

fruits.push("potato");
console.log(fruits);


fruits.shift();
console.log(fruits);


fruits.unshift("apple");
console.log(fruits);
*/


/*
//concatenation of an string 

let array1 = [1,2,3];
let array2 = [4,5,6];
let newArray = array1.concat(array2);
console.log(newArray);


//join method 

let fruits = ["apple", "banana", "cherry"];
let result = fruits.join('-');
console.log(result);

*/


//slice method 


let fruits = ["apple","banana","carrot","cucumber","brinjal"];
let cut = fruits.slice(1,3);
console.log(fruits);
console.log(cut);



//splice method 


let numbers = [1,2,3,45,6];
let removed = numbers.splice(2,2,6,7);
console.log(numbers);
console.log(removed);




//reverse()

let sumitfruit = ["mango","guava","strawberry","orange"];
sumitfruit.reverse();
console.log(sumitfruit);


console.log(sumitfruit.indexOf("guava"));


const array = [1,2,3,4,5,[6,7,8]];
console.log(array.flat());

console.log(array.isArray(array));

