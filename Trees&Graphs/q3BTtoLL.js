// traverse through the binary tree BFS
// save first level to LL
// save second level to LL

class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new LinkedNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.length === 1) {
      this.tail = newNode;
      this.head.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

class BT {
  constructor() {
    this.values = [3, 5, 9, 6, 8, 20, 10, null, null, 9];
    // this.linked = new LinkedList();
  }
  BFS() {
    if (this.values.length === 0) return null;
    let index = 0;
    const firstRow = this.linked.push(this.values[index]);
    console.log('This list...', this.linked);
  }
}

//         3
//      5     9
//    6  8  20  10
//      9

const ll = new LinkedList();

ll.push(2);
ll.push(7);
ll.push(19);
ll.push(234);
ll.push(31);

// console.log(ll);

const bt = new BT();
console.log(bt.BFS());
