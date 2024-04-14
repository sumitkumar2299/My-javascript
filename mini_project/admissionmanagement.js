const students = []

function liststudents(){
    return students;
}

function addstudent(name){
    students.push(name);
    return `student ${name} added successfully`
}


function removestudent(){
    //task1 to find the index of the element to be removed =>indexof
    let elementindex = students.indexOf(students);


    //task2 to remove the element from that index => splice.
    students.splice(elementindex, 1)



    //task3   to print something
    return `student ${name} removed successfully`;

}

console.log(addstudent("sumit"));
console.log(addstudent("kumar"));
console.log(liststudents());
console.log(removestudent("sumit"));
console.log(liststudents());


