class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.min = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.min === null) {
      this.min = val;
    }
    if (this.min !== null && val < this.min) {
      this.min = val;
    }
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  pop() {
    // FIFO so the first item needs to be popped
    if (!this.first) return null;
    const temp = this.last;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first.next = this.first;
    }
    this.size--;
    return temp.value;
  }
}

stack = new Stack();

stack.push(11);
stack.push(43);
stack.push(4);
stack.push(987);
stack.push(123);

console.log(stack);

stack.pop();
// console.log(stack);

console.log(stack.min);
