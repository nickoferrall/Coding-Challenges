// Given a string of text, write a program that prints a list of unique words contained in the string
// along with the number of occurrences of each word in the string. The list should be sorted by
// the number of occurrences of each word in descending order.

// const str = 'This is a test. That is not a test. Test';
const str =
  'From the moment the first immigrants arrived on these shores, generations of parents have worked hard and sacrificed whatever is necessary so that their children could have the same chances they had; or the chances they never had. Because while we could never ensure that our children would be rich or successful; while we could never be positive that they would do better than their parents, America is about making it possible to give them the chance. To give every child the opportunity to try. Education is still the foundation of this opportunity. And the most basic building block that holds that foundation together is still reading. At the dawn of the 21st century, in a world where knowledge truly is power and literacy is the skill that unlocks the gates of opportunity and success, we all have a responsibility as parents and librarians, educators and citizens, to instill in our children a love of reading so that we can give them the chance to fulfill their dreams.';
// const str = '';
// const str = ';;[]]{}';

// test 3
// a 2
// is 2
// not 1
// that 1
// this 1

// create obj
// toLowerCase, remove full stops semi-colons etc, split string into array
// for loop through cleaned array and add each word to the object with a count
// change object to array for sort
// edge cases: string is empty. Only non-alphanumeric characters in the string

function uniqueCount(str) {
  if (str.length === 0) return null;
  const wordObj = {};
  const cleanedArr = str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(' ');
  // this regex expression removes non-alphanumeric characters except whitespace and underscores. We could remove underscores too with .replace(/[^0-9a-z]/gi, '')
  // we could also use split, filter, join instead of regex. The regex expression is more efficient but less readable

  // loop through the cleaned array adding the occurrence count to the wordObj
  for (let i = 0; i < cleanedArr.length; i++) {
    if (wordObj[cleanedArr[i]]) {
      wordObj[cleanedArr[i]] += 1;
    } else {
      wordObj[cleanedArr[i]] = 1;
    }
  }
  let sortedArr = [];
  for (word in wordObj) {
    sortedArr.push([word, wordObj[word]]);
  }
  sortedArr.sort((a, b) => b[1] - a[1]); // sort arr in decending order by the second item in each array
  return sortedArr;
}

console.log(uniqueCount(str));
