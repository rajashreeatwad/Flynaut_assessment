const word = '00000111110101001111100001001';

// Split the word into an array of characters
const letters = word.split('');

let currentCount = 0;
let maxCount = 0;

for (let i = 0; i < letters.length; i++) {
  if (letters[i] === '1') {
    currentCount++;
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  } else {
    currentCount = 0;
  }
}
console.log('Longest chain of letters:', maxCount);
