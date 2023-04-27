let sum=0;
let num=12345;
let newn=num;
while(newn>0){
  rem=newn%10;
  sum = sum+rem;
  newn=parseInt(newn/10);
}
console.log("Sum = "+ sum)