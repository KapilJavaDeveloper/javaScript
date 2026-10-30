function greet(name){
    console.log("Hii " + name)  ;
}

greet("Isskander")  ;

function name(){
    return "Isskander"  ;
}

console.log(name())  ;

// functions expression -- storing a function into a variable

const multiply = function(a , b){
    return a*b ;
}

console.log(multiply(2,5))  ;

// arrow function -- arrow function is a shorter way to write a function 

const add = (a,b) =>{
    return a+b ;
}

console.log(add(2,3))  ;
