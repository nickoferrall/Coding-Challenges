class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    console.log(current.val);
    console.log(newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  unshift(input) {
    let newNode = new Node(input);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let followingNode = previousNode.next;
    previousNode.next = value;
    newNode.next = followingNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prev = this.get(index - 1);
    let toBeDeleted = prev.next;
    prev.next = toBeDeleted.next;
    this.length--;
    return true;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log('Arr:', arr);
  }
}

const list = new SinglyLinkedList();

console.log(list.push(100));
console.log(list.push(201));
console.log(list.push(202));
console.log(list.push(209));

// console.log(list.traverse());

// console.log(list.unshift('Dawg'));

console.log('GET', list.get(2));
// console.log('SET', list.insert('Dancing', 0));
console.log('Remove', list.remove(2));
console.log('GET', list.get(2));
// console.log('Head', list.head);
console.log(list.print());
console.log(list.reverse());
console.log(list.print());
