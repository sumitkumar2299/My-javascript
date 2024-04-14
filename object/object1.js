//object is a collection of key and values.
//keys should be either string or either symbol.
//value could be any data type. 



//how to create object 
const details = {
    name : "sumit ", 
    age : 55,
    address : "patna" 
}

console.log(typeof details);

console.log(details);



//is this objet true or not. 
//it internally converts that to string. 
const user = {
    1: "sumit",
    2: "kumar",
    3: "yadav"
}
console.log(user);


//value can be a function also. 

const person = {
    name : "sumit",
    greet : function (){
        console.log("hello students");
    }
}
console.log(person);



//second way of creating an object 
//using object constructor.

const obj = new Object()

console.log(obj);


//third way of craating an object using function 
//this refers to the object that will be created.
function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary
}
const emp_obj = new emp(1,"vishwa",7000);
console.log(emp_obj)



const students = {
    name : "sumit",
    age : 19,
    address : "patna",
    state : "bihar"
}
console.log(students);
//i would like to read the properties of  students.
console.log(students.name);
console.log(students.age);

//another way to read the properties of name 
//using bracket notation 

console.log(students["name"]);
console.log(students["age"]);


//print the address of the students
console.log(students.address);
console.log(students["address"]);

console.log(students.address.state); //we cannot reterive two key from an object in a single line . 



//if we want to reterive to retreive two key from an object in a single line then we have to make object inside objects. let's learn through an example. 
const students1 = {
    name : "sumit",
    age : 19,
    //declearing objects inside object.
    address : {
        city : "patna",
        state : "bihar",
        pincode : 7777
    }
}
console.log(students1.address.city);
console.log(students1["address"]["city"]);



//insert new field.
const person1 = {

}
//here we are inseting new field. 
person1.name = "sumit";
person1.class = "legend";
person1.address = "patna";
person1["roll"] = 18;

console.log(person1);

person1.name = "rahul"; //update the fields of an object.
console.log(person1);

//delete certain field
delete person1.name;
console.log(person1);

//if we want to delete entire object then this will not happen we cannot delete entire object. 
delete person1;
console.log(person1);


//different inbuilt methods of an object.

