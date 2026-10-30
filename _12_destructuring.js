let array = [1,2,3,4]  ;

let [a , b]  = array ;

console.log("a be: "  + a)  ;
console.log("b be: " + b)  ;

let employee = {
    name : "Isskander Chauhan" ,
    address : "Greater Noida"
}

let { name , addss = employee.address } = employee  ;

console.log("name be: "  + name)  ;
console.log("address be: "  + addss)  ;