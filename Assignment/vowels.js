//   Problem 4: print the number of vowels and consonants in a given sentence
//   Input : "How many vowels in a given sentence"
  
function countVowelsConsonants(sentence) {
    let vowelCount = 0;
    let consonantCount = 0;
    for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i].toLowerCase();
      if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        vowelCount++;
      } else if (letter >= "a" && letter <= "z") {
        consonantCount++;
      }
    }
    console.log("Number of vowels:", vowelCount);
    console.log("Number of consonants:", consonantCount);
  }
  countVowelsConsonants("How many vowels in a given sentence");
