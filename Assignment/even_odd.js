// Problem 3: count the number of even and odd number in a given array

// Input1 : [3,6,8,7,13,98,76]
// output : even_number = 4
//          odd_number = 3

function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    console.log("even_number =", evenCount);
    console.log("odd_number =", oddCount);
  }
  countEvenOdd([3,6,8,7,13,98,76]);