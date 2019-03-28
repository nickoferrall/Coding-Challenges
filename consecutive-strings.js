function longestConsecutive(arr, k) {
  if (arr.length === 0 || k > arr.length || k <= 0) return '';
  let longestString = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr.slice(i, i + k).join('');
    if (temp.length > longestString.length) {
      longestString = temp;
    }
  }
  return longestString;
}


// longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // <--- "abigailtheta"
// longestConsecutive(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1); // <--- "oocccffuucccjjjkkkjyyyeehh"
// longestConsecutive([], 3); // <--- ""
// longestConsecutive(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2); // <--- "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// longestConsecutive(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2); // <--- "wlwsasphmxxowiaxujylentrklctozmymu"
// longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], -2); // <--- ""
longestConsecutive(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3); // <--- "wkppvixoyxzzzzzzzzzzzz"
// longestConsecutive(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15); // <--- ""
// longestConsecutive(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0); // <--- ""

