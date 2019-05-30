// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is .

// checkMagazine has the following parameters:

// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

// we can loop through n and create an object with the count of each item
// then loop through m to see if the count of the item is the
// same or more than obj count
// if it's not, return no. If it is, return yes

// to make it more efficient, we could break once we equal count
// in second for loop

// const m = ['give', 'me', 'one', 'grand', 'today', 'night'];
// const n = ['give', 'one', 'grand', 'today'];

const m = ['two', 'times', 'three', 'is', 'not', 'four'];
const n = ['two', 'times', 'two', 'is', 'four'];

function checkMagazine(magazine, note) {
  let mObj = {};
  for (let i = 0; i < note.length; i++) {
    if (mObj[note[i]]) {
      mObj[note[i]] += 1;
    } else {
      mObj[note[i]] = 1;
    }
  }
  console.log('Obj -->', mObj);
  for (let j = 0; j < Object.keys(mObj).length; j++) {
    let count = 0;
    for (let mIndex = 0; mIndex < magazine.length; mIndex++) {
      console.log(
        'At the beginning -->',
        mIndex,
        magazine[mIndex],
        Object.keys(mObj)[j]
      );

      if (magazine[mIndex] === Object.keys(mObj)[j]) {
        // console.log('magazine[mIndex] -->', magazine[mIndex]);
        count += 1;
        if (count === Object.values(mObj)[j]) {
          //   console.log('count -->', count, Object.values(mObj)[j]);
          continue;
        } else if (mIndex === Object.keys(mObj).length - 1) {
          console.log('We here');
          return false;
        }

        // break if equal to values
      }
    }
  }
  return true;
}

console.log(checkMagazine(m, n));
