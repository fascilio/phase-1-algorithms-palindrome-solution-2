function isPalindrome(word) {
  // Write your algorithm here
  let leftPointer = 0;
  let rightPointer = word.length - 1;

  while (leftPointer < rightPointer) {
    if (word[leftPointer] !== word[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;

}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    // Initialize pointers
    leftPointer = 0
    rightPointer = length(word) - 1

    // Compare characters from both ends
    while (leftPointer < rightPointer):
        if (word[leftPointer] != word[rightPointer]):
            return false
        leftPointer += 1
        rightPointer -= 1

    // If we made it here, the word is a palindrome
    return true

*/

/*
  Add written explanation of your solution here
  It initializes leftPointer and rightPointer to the first and last character of the word respectively.
  It compares the characters at the current positions of the pointers, and returns false if they are not equal.
  It moves the pointers towards each other by incrementing leftPointer and decrementing rightPointer.
  It continues this process until the pointers cross in the middle of the word, or until a mismatch is found.
  If the loop completes without returning false, the word is a palindrome, so it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
console.log("");
 console.log("=>", isPalindrome("a"));
 console.log("=>", isPalindrome("ab"));