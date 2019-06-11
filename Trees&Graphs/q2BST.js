class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class minBST {
  constructor() {
    this.root = null;
  }
  //   insert(arr) {
  //     const midIndex = Math.floor(arr.length) / 2;
  //     let newNode = new Node(arr[midIndex]);
  //     this.root = newNode;
  //     while (true) {
  //       let count = 0;
  //       const leftHalfIndex = Math.florr(arr.slice(0, midIndex).length / 2);
  //       newNode.left = arr[leftHalfIndex];
  //     }
  //   }
  insertRecursive(arr, start, end) {
    if (end > start) return null;
    const mid = (start + end) / 2;
    const newNode = new Node(arr[mid]);
    newNode.left(this.insertRecursive(arr, start, mid - 1));
    newNode.right(this.insertRecursive(arr, mid + 1, end));
    return newNode;
  }
}

const bst = new minBST();

const arr = [2, 4, 7, 8, 10, 12, 21, 23, 41, 43, 50, 57, 70, 85, 90];

bst.insertRecursive(arr);

console.log(bst);
