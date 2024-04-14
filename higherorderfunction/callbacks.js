//callback is basically a function.
// it is a type of function which passed as an argument to a function.



// function hifunction(name,callback){
//     console.log("hi"+ '' + name + "i am the actual function");
//     callback();
// }


// //callback function
// function examplefunction() {
//     console.log("i come from the callback function");
// }


// //passing function as an argument 
// hifunction("folks", examplefunction);





function calculatematches(ismatch){
    otherpersonmatchinterest = ['l','l','l','r','l','l','r','l']

    for(i of otherpersonmatchinterest){
        if(ismatch(i)){
            console.log("yay i got a match"); 
        }
    }

    calculatematches((m) => m=='r');

    
}