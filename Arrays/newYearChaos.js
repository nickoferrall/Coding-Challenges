// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if and  bribes , the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

//  one person can bribe 2 people max
//  keep their old index position sticker

// Sample input
// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4

// Sample output
// 3
// Too chaotic

// for loop - check if q[i] is i+1;
// if it's not, check if q[i] === i + 2. If true, bribe +1
// if q[i] === i + 3, bribe + 2
// if q[i] > i + 3, return "Too chaotoc"
// else, return bribe count

// const q = [2, 1, 5, 3, 4];

// we can calculate how many places a person has moved by q[i] - i + 1
// e.g. 5 must have moved 2 places to be at position q[2]
// so q[2] or 5 - (2 + 1) = 2.
// However, how do we know if a person that was bribed, bribed someone else?
// a number in q should always be lower than the subequent numbers unless it's bribed
// we can check to see if a person that was bribed has bribed by
// starting at the end and finding the smallest number. If
// q[i] isn't > i + 1, but it is bigger than the smallest num,
// it must have swapped.

const q = [1, 2, 5, 3, 7, 8, 6, 4];
//         1  2  3  4  5  6  7  8
//               2     2  2

//         1  2  3  4  5  6  7  8
//         1  2  3  5  4  6  7  8  // 1
//         1  2  5  3  4  6  7  8  // 2
//         1  2  5  3  4  7  6  8  // 3
//         1  2  5  3  7  4  6  8  // 4
//         1  2  5  3  7  4  8  6  // 5
//         1  2  5  3  7  8  4  6  // 6
//         1  2  5  3  7  8  6  4  // 7

// if person in the queue has moved twice, we could check whether
// the person afterwards and subsequent person are in the same
// position at the end. If not, bribeCount += 1

// we could create a new empty array
// we add numbers to the empty array as expected with q's positioning
// then a for loop to check if positions are the same. Count the numbers that are different

function minimumBribes(q) {
  let bribeCount = 0;
  let smallestNum = q.length;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] > i + 2) {
      return 'Too chaotic';
    }
    if (q[i] > i + 1) {
      bribeCount += q[i] - (i + 1);
    } else {
      if (q[i] < smallestNum) {
        smallestNum = q[i];
      } else if (q[i] > smallestNum) {
        bribeCount++;
      }
    }
  }

  return bribeCount;
}

// do an if check to see if the number 1 after q[i] is bigger than i + 2
// if it is, an additional swap happened

// function minimumBribes(q) {
//   let bribeCount = 0;
//   for (let i = 0; i < q.length; i++) {
//     if (q[i] === i + 1) {
//     }
//     if (q[i] === i + 2) {
//       bribeCount += 1;
//     }
//     if (q[i] === i + 3) {
//       //   bribeCount += 2;
//       if (q[i + 1] > q[i + 2] && q[i + 1] !== i + 4) {
//         console.log('Testing..', i, q[i + 1], q[i + 2]);
//         bribeCount += 3;
//       } else {
//         bribeCount += 2;
//       }
//     }
//     if (q[i] > i + 3) {
//       return 'Too chaotic';
//     }
//   }
//   return bribeCount;
// }

console.log(minimumBribes(q));
