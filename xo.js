// function XO(str) {
//   const splitStr = str.toLowerCase().split("");
//   let xCount = 0;
//   let oCount = 0;
//   for (let i = 0; i < splitStr.length; i++) {
//     if (splitStr[i] === "x") {
//       xCount += 1;
//     }
//     if (splitStr[i] === "o") {
//       oCount += 1;
//     }
//   }
//   if (xCount === oCount) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  console.log((x && x.length) === (o && o.length));
}

XO("ooxx");
XO("xooxx");
XO("ooxXm");
XO("zpzpzpp");
XO("zzoo");
