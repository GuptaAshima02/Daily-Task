//  Problem 6 : Fibannoci Series (itreative)


let f1=0,f2=1,f;
for(let i=0;i<10;i++){
  console.log(f1);
  f=f1+f2;
  f1=f2;
  f2=f;
}

//Problem 7 : Fibannoci Series(recursive)
function fab(n){
  if(n<2)
  return n;
  else
  return fab(n-1)+fab(n-2);
}
for(let i=0;i<10;i++){
  console.log(fab(i))
}