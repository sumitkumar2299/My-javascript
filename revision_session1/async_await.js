//async await - if function is time taking and you want to execute asynchronously then we will use async and await. 

//it transform the function into an async function. 

/*

async function printMessage(){
    return "hello students";
}

console.log(printMessage());

printMessage().then(msg => console.log(msg));

*/



/*
i want to print hello after the wait 
*/



/*
function printHelloafterawait(){

    setTimeout(()=> {
        console.log("hello students");
    },3000)


    console.log("this line should be the last print");
}

printHelloafterawait();
*/





/*
async function printHelloafterawait() {

    //await is always applied to promise

    let result = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("hello students")
        }, 3000);
    })

    console.log(result);

    console.log("this line should be the last print");
}


console.log("first line");
printHelloafterawait()
console.log("last line");
*/















