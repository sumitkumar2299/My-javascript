//destructuring 
//to extract the value from a given array.

/*
const nums = [1,2,3];
const [one , two, three] = nums;

console.log(one);
console.log(two);
console.log(three);

*/


/*
const nums = [1,2,3];
const[one, , three] = nums;
console.log(one);
console.log(three);
*/




/*
const nums = [1,2,3,4];

const [, num1, , num2] = nums;
console.log(num1);
console.log(num2);
*/




//split string ko array mein convert karta hai 

/*
const name = 'sumit kumar';

const [firstName, LastName] = name.split('');

console.log(firstName);
console.log(LastName);


*/


/*
const name = 'abc';
const [char1, char2, char3] = name;
 console.log(char1);
 console.log(char2);
 console.log(char3);

 */


/*
const [num1, num2, num3] = new Set([1,2,3]);
console.log(num1);
console.log(num2);
console.log(num3);
*/





/*
let firstName = 'john';
let lastName = 'kumar';

const person = {};
[person.firstName, person.lastName] = [lastName, firstName];

console.log(person);

*/




//object destructuring 
/*
const obj = {
    firstName : 'sumit', 
    lastName : 'kumar',

}

const {firstName, lastName} = obj;
console.log(firstName, lastName);
*/

/*
const obj = {
    firstName : 'sumit', 
    lastName : 'kumar',

}

const {firstName,middlename, lastName} = obj;
console.log(firstName,middlename, lastName);
*/


/*
//concept of alias 
const firstName = 'abc';
const obj = {
    firstName : 'sumit', 
    lastName : 'kumar',

}

const {firstName :fn, lastName} = obj;
console.log(fn, lastName);
*/


/*
let options = {
    size : {
        width : 100,
        height : 200, 
    }, 
    items: ["cake ", "donut"],
    extra: true,
};

const {//destructuring assignment split in multiple lines
    size: {//put size here
        width : w,
        height : h
    },

items : [item1,item2],//assign items here
title = "menu"//not present in the object(default value);
} = options;

console.log(width, item2);

*/




function name({fn,ln}){
    console.log(`${fn} ${ln}`)
}

name(
    {
        ln : "doe",
        fn : "john"
    }
)