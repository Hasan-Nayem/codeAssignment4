//Problem 01
function mindGame(number){
    if(typeof(number) != "number"){
        return "Please Entar Any Number."
    }else{
        return ((((number*3) + 10) / 2) -5);
    }
    
}
console.log("problem 1 : " , mindGame("5"));