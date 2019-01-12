function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  console.log((x && x.length) === (o && o.length));
}

XO('ooxx');
XO('xooxx');
XO('ooxXm');
XO('zpzpzpp');
XO('zzoo');
