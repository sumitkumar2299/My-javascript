/*


//for each method -> same array is changed.
fruits = ["mango","apple","banana"];

fruits.forEach(print);

function print(str){
    console.log(str);
}

*/




/*
// map function => transform the given array.
sqr_arr = [1,2,3,4].map(elem =>elem*elem)
console.log(sqr_arr);

fruits = ["mango","apple","banana"];
transformed_fruits = fruits.map(f => f.toUpperCase());
console.log(fruits);
console.log(transformed_fruits);

*/




//filter method 
//this doesnot change the original array.
even_elements = [1,2,3,4,5,6,7,8,9,10].filter((num)=> num%2==0);
console.log(even_elements);