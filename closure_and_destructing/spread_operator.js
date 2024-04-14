//spread operator
/*
const nums = [1,2,3];
const newArr = [...nums];
console.log(newArr);//clonning of an array.
*/


/*
const nums = [1,2,3];
const newArr = [...nums,4];
console.log(newArr)
*/



/*
const nums1 = [1,2,3];
const nums2 = [4,5,6];

const newArr = [...nums1, ...nums2];
console.log(newArr);
*/


/*
const nums = [1,2,3];

const sum = (a,b,c) => {
    console.log(a+b+c);
}

sum(...nums);
*/




/*
const str = "abc";
const chars = [...str];
console.log(chars);
*/




let obj1 = {
    name: "pw skills",
    course: "full stack web development"
};

let obj2 = {
    rating : 5,
    reviews : 2000
};


const obj = {...obj1, ...obj2};
console.log(obj);