/*
//new set constructor
const setDemo = new Set();
//add method
setDemo.add(1);
setDemo.add(2);
console.log(setDemo);
console.log(setDemo.size);
setDemo.delete(2);
console.log(setDemo.size);
setDemo.clear()
console.log(setDemo.size);
setDemo.add('a');
console.log(setDemo.entries());

*/


//it is used to check duplicate value in an array. 

const array = [1,2,3,5,5,4];
const myset = new Set(array);
console.log(array);
console.log(myset);
