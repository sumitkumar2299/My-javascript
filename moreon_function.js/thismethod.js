/*
//this keyword 
// it is an inbuilt global object in javascript.
//this is reffering to the object it is part of. 
console.log(this);


function func()
{
    console.log(this);
}
func();
*/




/*
//using this inside the js objeect

const obj = {
    name : "sumit",
    age : 49,
    alias : this.name + " " + "kumar",//undefined.
    greet : function(){
        console.log(this.name);
    },
    address : {
        city : "patna",
        country : this.name + " " + "india",
    }

}
obj.greet();
console.log(obj.alias);
console.log(obj.address.country);

//whenever you use this outside the function this will always refers to a global object. 
//this doesn't refers to the parent object in arrow function. 

*/




//constructor function 
function person(name){
    this.name = name;
}
const person_obj = new person("sumit")
console.log(person_obj);