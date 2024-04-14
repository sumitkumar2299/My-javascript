const emp = {
    name : "sumit",
    age : 55,
    salary : 44444,
    address : {
        state : "bihar",
        district : "patna ",
        pincode : 777,
        galinumber : 7
    }
}

//list of all the keys in the given method 
console.log(Object.keys(emp));//from here i will only get the top level keys. not the nested level key.


//list of all the values in the given object.
console.log(Object.values(emp));

//list of all the keyvalue pairs
console.log(Object.entries(emp));

console.log(emp);


//assign
emp_new = Object.assign({},emp,{role : "developer"});
console.log(emp_new);


const sumit = {
    name : "sumit kumar",
    age : 78, 
    //here i don't want to change the name and age in the object means we have to fixed the value of name and age.

}
console.log(sumit);
Object.freeze(sumit);//object is now freezed and can't be changed.
sumit.name =  "rahul ";//this will not work bcz we have already freeze the object. even you can't insert or delete from that object.and no modification.
console.log(sumit);


//to check whether the object is frozen or not. 
console.log(Object.isFrozen(sumit));//this will give output only true or false. 


//seal method :- 
//no addition 
//no deletion
//but we can update existing field. 


const sumit1 = {
    name : "sumit ", 
    age : 88
}
console.log(sumit1);
Object.seal(sumit1);
sumit1.name = "rahul";
console.log(sumit1);
sumit1.hobby = "cricket";
console.log(sumit1);//addition is not working. 




const sumit2 = {
    name : "sumit",
    age : 44, 
    salary : 7777
}
console.log(Object.hasOwn(sumit2,"name"));
//console.log(object.hasOwn(sumit2,"company")); //object is not defined.

console.log(Object.getOwnPropertyNames(sumit2)); //it is similar to the key. 
console.log(Object.getOwnPropertyDescriptors(sumit2));


//


