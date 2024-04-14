
/*
//promise from simran 
const promiseFromSimran = new Promise(((resolve, reject) => {
    let parentsDecision = true;
    if(parentsDecision){
        resolve("yay, shadi ki taiyari karo");
    }
        else{
            reject("papa ne doosra ias khoj liya hai");
        }
    }

));


promiseFromSimran.then((message) => {
    console.log("message from my girl"+message);
    console.log("my life is set")
}).catch((msg) =>{
    console.log("message from my girl"+message);
    console.log("where is my tinder");
}).finally(() => {console.log("finally i am clear")});

*/

//where do we use promise in javascript 
//trying to fetch the comments on his post. 



/*
//multiple promises 

const dost1Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() >0.5){
            resolve("dost1 is ready to come ");

        }
        else{
            reject("dost1 is not coming ");
        }
    },3000)
})



const dost2Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() >0.5){
            resolve("dost2 is ready to come ");

        }
        else{
            reject("dost2 is not coming ");
        }
    },3000)
})


const dost3Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() >0.5){
            resolve("dost3 is ready to come ");

        }
        else{
            reject("dost3 is not coming ");
        }
    },3000)
})

// only if all of them comes, i will marry, else not marry 


const friendPromises = [dost1Promise, dost2Promise, dost3Promise]

Promise.all(friendPromises).then(result => {
    console.log(result);
    console.log("i will marry")
}).catch(mess => {
    console.log(mess)
    console.log("since all of my friends didn't come , i will not marrry")
})

*/



/*
//any method = if any of them will come then i will accept. 

const gf1Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() >0.5){
            resolve("gf1 is ready to come ");

        }
        else{
            reject("gf1 is not coming ");
        }
    },3000)
})



const gf2Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() >0.5){
            resolve("gf2 is ready to come ");

        }
        else{
            reject("gf2 is not coming ");
        }
    },3000)
})


const gf3Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() >0.5){
            resolve("gf3 is ready to come ");

        }
        else{
            reject("gf3 is not coming ");
        }
    },3000)
})

// only if any of them comes, i will marry, else not marry 


const gfPromises = [gf1Promise, gf2Promise, gf3Promise]

Promise.any(gfPromises).then(result => {
    console.log(result);
    console.log("i will marry")
}).catch(mess => {
    console.log(mess)
    console.log("since all of my friends didn't come , i will not marrry")
})
*/















//promise -> bound to be true. 

const motherpromise = promise.resolve("mom never lies");

const tinderpromise = promise.reject("tu toh gaya beta");




