//for-of for array of objects
let arr=[
    {
        name:"ashima",
        age:22
    },
    {
        name:"archita",
        age:20
    },
    {
        name:"muskan",
        age:21
    }
]
function forof(){
    for(let key of arr){
        console.log(JSON.stringify(key));
        // console.log(key);
    }
}

//for-of for string

function string(){
    let str="My name is ashima gupta";
    let str1="";
    for (item of str){
        // console.log(item)
        str1 +=item
    }
        console.log(str1)

}