var admin_credentials = {
    email : "sumit@20000",
    password : 123456
}
function login(email, password){
    if(email == admin_credentials.email && password == admin_credentials.password){
        console.log("login sucsessful");
    }
    else if((email == admin_credentials.email && password != admin_credentials.password)){
        console.log("password mismatch");
    }
    else{
        console.log("invalid credentials");
    }

}
login("sumit@20000",123456);
login("sumit@20000",145);
login(777,7);