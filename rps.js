const rounds = 2;

function rps(rounds) {
  const options = ['r', 'p', 's'];
  const arr = [];

  function play(currentStr, rounds) {
    if (rounds === 0) {
      console.log('Pushing ->', currentStr);
      arr.push(currentStr);
    } else {
      for (let i = 0; i < options.length; i++) {
        console.log('Str', currentStr, rounds, i);
        play(currentStr + options[i], rounds - 1);
      }
    }
    return arr;
  }
  play('', rounds);
  return arr;
}

console.log(rps(rounds));
