// Problem 2: check whether the number is armstrong number or not

// Input1 : 371
// output : yes

// Input2 : 321
// output : no

const orig=371;
let n=orig;
let S=0;
while(n>0){
  rem=n%10;
  S= S+(rem*rem*rem); 
  n=parseInt(n/10);
}
if (S === orig) {
  console.log("Number is armstrong");
} 
else {
  console.log("Number is not armstrong");
}