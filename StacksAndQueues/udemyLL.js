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
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }
  pop() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }
}

let myStack = new Stack();
myStack.push(234);
myStack.push(223);
myStack.push(2324);

// myStack.pop();

console.log(myStack);
console.log(myStack.pop());
