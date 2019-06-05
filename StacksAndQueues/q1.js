// single array for three stacks
// LIFO
// push and pop

let arr = [[], [], []];

arr[1].push(234);
arr[1].push(432);
arr[1].push(434);

arr[0].push('hey');
arr[0].push('wow');
arr[0].push('yeahhhh');

arr[2].push(1);
arr[2].push(2);
arr[2].push(3);

console.log(arr);

arr[1].pop();
arr[2].pop();

console.log(arr);
