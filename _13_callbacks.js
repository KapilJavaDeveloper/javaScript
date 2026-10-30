function welcome(callback){
    callback()  ;

}

function greet(){
    console.log("Hello") ;
}

welcome(greet)  ;