
// Problem 5: Apply Linear Search Algo

let ar=[2,55,6,7,3,8];
let target=6;
for(var i=0;i<ar.length;i++){
  if(ar[i]==target)
  break;
}
if(i<ar.length){
  console.log("location: "+(i+1));
}
else{
  console.log("Number not found")
}