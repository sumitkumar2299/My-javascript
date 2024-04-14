//decleration of an array.

let arr = [5,4,6,7,8];
console.log(arr);
//to find element of an array.
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[6]);//this will show undefined.


//to find the length of an array.
console.log(arr.length);

//other way of defining an array.
arr1 = Array(1,2,3,4,5);
console.log(arr1);


//third way of defining an array. this is called constructor way.
arr3 = new Array(2,4,6,8);
console.log(arr3);


//deleting an array from the element.
let array = [5,4,3,2,1,8];
console.log(array[2]);

//for deletion of an array.
delete array[2];
console.log(array);


//traversal of an arary.

for(i=0;i<array.length;i++){
    console.log(array[i]);//here we are traversing an element of an array.
}



