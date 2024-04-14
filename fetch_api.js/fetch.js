//network and apis

//api is a medium in which you are communicating. 


//api => application programing interface. 

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data));
