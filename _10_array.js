let array = [1,2,3,4]  ;

console.log(array)  ;


// forEach 
array.forEach(function(n){
    console.log(n)  ;
})
// map method 

let result1 = array.map(a => a*2) ;

console.log("result1 be: "+result1)  ;

// filter 

let result2 =  array.filter(a => a > 2)  ;
console.log("result2 be: "  + result2)  ;

let result3 = array.reduce((sum, n) => sum+n , 0)  ;
console.log("result3 be: "  + result3)   ;


