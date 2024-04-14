const mechanic = {
    name : "sumit", 
    fixitem : function(itemName){
    console.log(`${this.name} ${itemName} has been fixed`);

    }
}

const person = {
    name : "kumar",
}

mechanic.fixitem.bind(person,"bike");


console.log(mechanic.fixitem.bind(person,"bike"))

mechanic.fixitem.bind(person,"bike") ()
