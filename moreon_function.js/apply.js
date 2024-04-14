//in apply we pass array as an argument.
const mechanic = {
    name : "sumit", 
    fixitem : function(itemName,arg){
    console.log(`${this.name} ${itemName} has been fixed`);

    }
}

const person = {
    name : "kumar",
}

mechanic.fixitem.apply(person,["refrigerator","tv","fan"]);
