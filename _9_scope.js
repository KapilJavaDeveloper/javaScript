// global scope 

let name = "Isskander"  ;

function greet(){
    console.log("Hi " + name)  ;
}

greet()  ;
console.log(name)  ;

// function scope 

function function_scope(){
    let last_name = "Chauhan"  ;

}

if(true){
    let last = "chauha"  ;
}

console.log(last)  ;

// console.log(last_name)  ;