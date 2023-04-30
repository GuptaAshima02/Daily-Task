//Syntax

// try{
//     //some code that could fail
// }
// catch(error){
//     //do somethimg with the error
// }
// finally{
//     //this code always run
// }

function tryCatch() {
    let result;
    try{
        result=x/10;
    }
    catch(error){
        // console.log(error.message)
        console.log("Error is: "+error.message)
    }
}
function tryCatchFinally() {
    let result;
    try{
        console.log("An error will occur")
        result=x/10;
        console.log("This line will never run")
    }
    catch(error){
        // console.log(error.message)
        console.log("Error is: "+error.message)
    }
    finally{
        console.log("Finally block")
    }
}
function tryCatchFinallySucess() {
    let result;
    let x=10;
    try{
        console.log("An error won't occur")
        result=x/10;
        console.log("This line will  run")
    }
    catch(error){
        // console.log(error.message)
        console.log("Error will nor occur: "+error.message)
    }
    finally{
        console.log("Finally block")
    }
}

//throw a custom error--always comes inside catch block

function tryCatchFinallyThrow() {
    let result;
    try{
        console.log("An error will occur")
        result=x/10;
        console.log("This line will never run")
    }
    catch(error){
        // console.log(error.message)
        // console.log("Error is: "+error.message)
        //always have masseage and name properties
        throw{
            "message":"In the tryCatchFinallyThrow() method the following error ocurred",
            "name":"Custom Error"
        }
    }
    finally{
        console.log("Finally block")
    }
}