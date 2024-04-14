const hello = "hello world";

//charat()
console.log(hello.charAt(2));

//endswith()
console.log(hello.endsWith("ld"));//it check it occur or not in hello string, here string is ends with ld.
console.log(hello.endsWith("or",9));//kya itne length tak or se end ho rha hai ya nhi.


//includes()
console.log(hello.includes("or"));//koi cheez isme exist karti hai ya nhi karti hai
console.log(hello.includes("ot"));//ye exist nahi kar rahi hai toh iska output false aayega. 

console.log(hello.includes("lo",5))//agar kisi particular index se search start karte hai toh uske liye second parameter dete hai. 



console.log(hello.padEnd(15,"."));//output  hello world....
console.log(hello.padStart(15,"."));//output ....hello world


console.log(hello.repeat(3));//it repeats in same line but not in next line. 


console.log(hello.replace("lo w","abc"));//here we are replacing lo w to abc. 
console.log(hello); //because string is immutable. 


console.log(hello.replaceAll('l',"L"));

console.log(hello.indexOf("l",2));

console.log(hello.slice(3));

console.log(hello.split(""));


console.log(hello.substring(4,8));


console.log(hello.toLowerCase());
console.log(hello.toUpperCase());









