//object creation 

// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student"
// }

// accening value 

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);

//symbol datatype

// let mysymbol=Symbol();//used to hide information inside objects
// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student",
//     [mysymbol]:"Secret"//only we can access
// }
// console.log(person.mysymbol)//output-undefined

//function inside object

// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student",
//     show:function(){
//         console.log("showInfo")
//     }
// }
// person.show();

//accesimg values from inside objects in function use this.name

// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student",
//     show:function(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.occupation)
//     }
// }
// person.show();

//function with arguments

// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student",
//     show:function(realage){
//         console.log(this.name + " is "+ realage)
//     }
// }
// person.show();//if we cant pass parameter in() then outputr is undefined

// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student",
//     show:function(realage){
//         console.log(this.name + " is "+ realage)
//     }
// }
// person.show(21);
// console.log(typeof person.show);//output-function


// let person={
//     name:"ashima",
//     age:22,
//     occupation:"student",
//     }

// function incrementAge(person){
//     person.age++;
// }

// incrementAge(person)

// console.log(person.age)

//build in objects
let person={
    name:"ashima",
    age:22,
    occupation:"student",
    }