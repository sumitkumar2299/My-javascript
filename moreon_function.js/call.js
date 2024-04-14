//function method is call, apply, bind
const mechanic = {
    name : "sumit", 
    fixitem : function(itemName){
    console.log(`${this.name} ${itemName} has been fixed`);

    }
}

const person = {
    name : "kumar",
}

mechanic.fixitem.call(person,"bike");




//rough learning by sumit kumar

const teacher = {
    name : "MANOJ",
    occupation : function(book){
        console.log(`${this.name} your ${book} is solved come and resolve your doubt`);
    }
}


const students = {
    name : "sumit",
}
teacher.occupation.call(students,"blackbook");



const mentor = {
    name : "sumit",
    work : function(doubt,module){
        console.log(`${this.module} ${this,book} is solved sucsessfully.`);
    }
}


console.log(mentor.work.call(chemistry));

//we cannot use call in a single object.
//for the usage of call you have to make two objects.





