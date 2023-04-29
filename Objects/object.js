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

//Explicit binding

// let person={
//     name:"ashima",
//     age:22,
//     getAge:function(location,gender){
//         console.log(this.age,location,gender)
//     }
//     }

//     let person1={
//         name:"ash",
//         age:32
//         }
        
// person.getAge.call(person1,"jammu","female")
// person.getAge.apply(person1,["jammu","female"])    
// person.getAge();

// let obj={
//     age:22
// }
// let obj1={
//     age:15
// }
// function getAge(){
//     console.log(this.age)
// }
// // obj.age;
// getAge.call(obj)
// getAge.call(obj1)

//bind method

// let obj={
//     age:22
// }
// let obj1={
//     age:15,
//     getAge:function(){
//         console.log(this.age)
//     }
// }

// // console.log(obj1.getAge.bind(obj))//bound getAge
// let x = obj1.getAge.bind(obj) 
// x()

// let obj={
//     age:22
// }
// let obj1={
//     age:15,
//     getAge:function(location){
//         console.log(this.age,location)
//     }
// }

// // console.log(obj1.getAge.bind(obj))//bound getAge
// // let x = obj1.getAge.bind(obj,"jammu") 
// let x = obj1.getAge.bind(obj) 
// x("jammu")

// let obj={
//     age:22
// }
// let obj1={
//     age:15
// }
// function getAge(){
//     console.log(this.age)
// }
// // let x = getAge.bind(obj)
// let x = getAge.bind(obj1)

// x()

//nested object

// let obj={
//     name:"ashima",
//     test:{
//         console.log(this.name)//error
//     }
// }


// let obj={
//         name:"ashima",
//         another:{
//             name:"test",
//             getName:function(){console.log(this.name)}
//         }
//     }

//hoisting

// myfun();//declaration

// function myfun(){
//     console.log("called")
// }

// const a=function(){
//     console.log("ashh")
// }
// a()

// a()//no hoisting in case oif const

// const a=function(){
//     console.log("ashh")
// }

