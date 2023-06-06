var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

// Find duplicate values
var duplicates = fullWordList.filter(function(value) {
  return wordsToRemove.includes(value);
});

// Find same values
var sameValues = fullWordList.filter(function(value) {
  return wordsToRemove.indexOf(value) !== -1;
});

console.log('Duplicates:', duplicates);
console.log('Same values:', sameValues);