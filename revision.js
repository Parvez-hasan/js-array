// const ---> value not going to change 
// let ---> value might change 

// var

const price = 400;  // number 
const name = "Parvez Hasan"; //string
const isPoor = false; // boolean

const friends = ['Elon', 'Mark', 'Bill', 'Jeff']; // array
const students = {
    name : "Pavez",
    class : 12,
    age : 21, 
    address : "kishoreganj"
} // Object 

// condition
if(price > 1000){
    console.log("to expensive. not for me");
    
}else if (price > 500){
console.log("may be i can buy this");

}
else {
    console.log("within my budget");
    
}

//loop
let pushUp = 0;
while(pushUp < 10){
    console.log("push Up", pushUp);
    pushUp++
    
}

// for 
for (let i = 0; i < 10; i++){
    console.log(i);
    
}