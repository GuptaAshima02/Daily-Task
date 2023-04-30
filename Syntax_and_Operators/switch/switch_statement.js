// //we use switch instead of  multiple if..else statements
// //it will help us simplify the code

/////   SYNTAX

// switch(expression){
//     case<expression1>:
//     //statement
//     break;
//     case<expression2>:
//     //statement
//     break;
//     default://if no other case is matched
//     //statement
//     break;
// }

////// Example

function Switch(){
    let product=2;
    switch(product){
        case 1:
            console.log("product1");
            break;
        case 2:
            console.log("product2");
            break;
        default:
            console.log("unknown product");
            break;
    }
}

//we allowed to have multiple case statement
///// Syntax

//switch(<expression>){
    // case<expression1>:
    // case<expression2>:
    // case<expression3>:
    //Statements
    // break;

    // default:
    // break;
// }

function multipleCase(){
    let color="Red";
    switch(color){
        case "Red":
        case "pink":
            console.log("The color is red");
            break;
        case "Blue":
        case " Light Blue":    
        case "Dark Blue":
            console.log("The color is Blue");
            break;
        default:
            console.log("Unknown color");
            break;
    }
}

//when we forgot a break next statement also got printed

function forgotbreak(){
    let product=1;
    switch(product){
        case 1:
            console.log("product1");
        case 2:
            console.log("product2");
            break;
        default:
            console.log("unknown product");
            break;
    }
}

//Strict Comparison

function strictComparison(){
    let product="2";
    switch(product){
        case 1:
            console.log("product1");
            break;
        case 2:
            console.log("product2");
            break;
        default:
            console.log("unknown product");
            break;
    }
}
// output will be the deafult statement
// beacuse "2" and 2 is not of same 

//Block level Scope

// function BlockScope(){
//     let product=2;
//     switch(product){
//         case 1:
//             let message="my name is ashima"
//             console.log(message);
//             break;
//         case 2:
//             let message="my age is 22"
//             console.log(message);
//             break;
//         default:
//             let message="unknown product"
//             console.log(message);
//             break;
//     }
// }
//gives syntax error

function BlockScopeFix(){
    let product=3;
    switch(product){
        case 1:{
            let message="my name is ashima";
            console.log(message);
            break;
        }
        case 2:{
            let message="my age is 22";
            console.log(message);
            break;
        }
        default:    
            let message="unknown product";
            console.log(message);
            break;
            
    }
}