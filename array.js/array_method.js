arr = [3,4,5,6,7,8];
console.log(arr);


//pop() -> it is used to remove the element of an array from the last.

console.log(arr.pop());
console.log(arr);

//push() -> to add an element at an end.

arr.push(9);
console.log(arr);


//shift() -> remove from the first position.
arr.shift();
console.log(arr);


//unshift() -> add an element from the first position.
arr.unshift(88);
console.log(arr);


let arr2 = [2,4,5,6,8];
console.log(arr2);

let arr3 = [5,1,2,4];
console.log(arr3);

//concat() -> to join the element of two array.
array = arr2.concat(arr3);
console.log(array);


//join method -> it join all the elements of an array 
let result = arr2.join()
console.log(result);
console.log(typeof result);//when we join elements of an array it gives string data type as a result.

let result1 = arr2.join("-") //here elements are seperated by - . 
console.log(result1);


//slice method - slice is a sub-part of an array.
let array3 = [55,4,2,9,8,7,5,2];
let output =  array3.slice(2,5)//here the value of index 5 is excluded.
console.log(output);
//when you perform the slice operation in an array it does not impact on original array.
console.log(array3);
console.log(array3.slice());//if no arguments passed then entire array will be returned.
console.log(array3.slice(2));//take out the array starting from the second index.
console.log(array3.slice(0,2,8));
console.log(array3.slice(-1)); // it gives last element.
console.log(array3.slice(-4,-1));



//splice() -> it is used to add or remove an element at any index.
let array4 = [5,8,6,4,2,9,3];
array4.splice();
console.log(array4.splice());//it gives an empty array.
array4.splice(4,1);
console.log(array4.splice(4,1));
console.log(array4);//it delete the elements from an original array.
array4.splice(4,1,56);
console.log(array4);


//reverse() -> to reverse the element of a given array.
let array5 = [5,1,2,4];
array5.reverse();
console.log(array5);


//sort() -> to sort a given array.
array5.sort();
console.log(array5);//here we are sorting alphabetically.

//to string
let arr6 = [5,4,2,1];
str = arr6.toString()

console.log(str);
console.log(typeof str); //it is similar to join method.

//flat() -> to flat the two array.
let arr7 = [5,4,2,1,[5,4,3]];
let flat = arr7.flat();
console.log(flat);
console.log(arr7);//original array remains same during the operation of flat.


let arr8 = [5,1,2,[4,59,[5,42,1]]];
console.log(arr8.flat(3));