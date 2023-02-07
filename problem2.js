//Problem 02
function evenOdd(myString){
    if(typeof(myString) != "string"){
        return "Please Enter Any String";
    }else{
        if(myString.length % 2 == 0){
        return "even";
        }else{
            return "odd";
        }
    }
    
}
console.log("Problem 2 :",evenOdd(12));