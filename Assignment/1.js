// Problem 8: Concatenation of Array (Input: nums = [1,2,1], Output: [1,2,1,1,2,1] )
var a=[1,2,1]
var b=[1,2,1]
console.log(a.concat(b))

// Problem 1: Sum of digits of a number
// Input : 12345
// Ouput : 15

function Sum(n)
{
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
var n = 687;
document.write(Sum(n));


// Problem 2: check whether the number is armstrong number or not

// Input1 : 371
// output : yes

// Input2 : 321
// output : no

let n = 153;
let temp = n;
let p = 0;
 

while (n > 0) {
 
    let rem = n % 10;
    a = (a) + (rem * rem * rem);
    n = Math.floor(n / 10);
}

if (temp == a) {
    console.log("Yes. It is Armstrong No.");
}
else {
    console.log("No. It is not an Armstrong No.");
}

// Problem 3: count the number of even and odd number in a given array

// Input1 : [3,6,8,7,13,98,76]
// output : even_number = 4
//          odd_number = 3
