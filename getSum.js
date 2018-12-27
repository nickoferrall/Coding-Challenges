function GetSum(a, b) {
  if (a === b) {
    console.log(a);
  }
  const sorted = [a, b].sort((a, b) => a - b);
  let myAnswer = 0;
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    myAnswer += i;
  }
  console.log(myAnswer);
}

// GetSum(1, 0) == 1; // 1 + 0 = 1
// GetSum(1, 2) == 3; // 1 + 2 = 3
// GetSum(0, 1) == 1; // 0 + 1 = 1
// GetSum(1, 1) == 1; // 1 Since both are same
// GetSum(-1, 0) == -1; // -1 + 0 = -1
// GetSum(-1, 2) == 2; // -1 + 0 + 1 + 2 = 2

GetSum(-479, -431);
