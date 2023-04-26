//Array Methods

let n=[1,7,9];

//toString() method

let a=n.toString();
console.log(a);

//join()

let b= n.join();
let c= n.join(".");

console.log(b);
console.log(c);

//map

const d=n.map((val)=>{
console.log(val);
    
})
console.log(d);

//foreach
// arr=[1,4,7]
// const e =arr.foreach((value)=>{
//     console.log(value); 
//     })
//     console.log(e);

// filter
// array=[1,2,3,4,5,6,7,8,9]
// const f=array.filter((fil)=>fil%2 == 0)
// console.log(f)


// let arr=[]
// for(i=1;i<=50;i++){
//     // console.log(i)
//     arr.push(i)
//     // console.log(a)
    

// }
// console.log(arr)

// const fi=arr.filter((n)=>n%2==0 && n%5==0);
// console.log(fi)

let names=['ash','momin','muneesh','shivam','sapna','diksha']
const name=names.filter((n)=>n.length>5);
console.log(name)

//find
array=[1,2,3,4,5,6,7,8,9]
const f=array.find((fil)=>fil%2 == 0)
console.log(f)

//sort
array=[1,5,3,2,8,4,9]
array.sort();
console.log(array)

//reduce
const arr=[1,2,3,4,5,6]
const initialvalue=0
const red=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue);
console.log(red)

//map-filter
const m=[1,2,3,4,5,6]
const ma=m.map((item)=>item).filter((item)=>item%2==0)
    console.log(ma);

