// 60 seconds in a minute
// 3600 seconds in an hour

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600).toString();
  //   hours.length === 1 ? (hours = 0 + hours) : hours;
  hours.length === 1 ? (hours = hours.padStart(2, '0')) : hours;
  let minutes = Math.floor((seconds - hours * 3600) / 60).toString();
  minutes.length === 1 ? (minutes = 0 + minutes) : minutes;
  let humanSeconds = (seconds - hours * 3600 - minutes * 60).toString();
  humanSeconds.length === 1 ? (humanSeconds = 0 + humanSeconds) : humanSeconds;
  console.log(`${hours}:${minutes}:${humanSeconds}`);
}

humanReadable(0);
humanReadable(5);
humanReadable(60);
humanReadable(86399);
humanReadable(359999);
humanReadable(86400);
