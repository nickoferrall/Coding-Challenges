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
    let newNode = new Node(val);
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
  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
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
    if (!this.head) return null;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  removeDups() {
    let currentVals = [this.head.val];
    let current = this.head;
    let nextVal = current;
    let count = 0;
    let dups = [];
    while (current.next !== null) {
      nextVal = current;
      current = current.next;
      if (currentVals.includes(current.val)) {
        dups.push(current.val);
        this.remove(count);
      } else {
        currentVals.push(current.val);
      }
      count++;
    }
    return currentVals;
  }
}

let list = new SinglyLinkedList();

list.push('Helloooo');
list.push('there');
list.push('old');
list.push('old');
list.push('friend');
// console.log(list);

// go through the linked list saving each value in an array
// if the ll value is already in the array, remove

// console.log(list.shift());
// console.log('Head -->', list.head);

// console.log(list.get(2).val);

function checkDups(linkedList) {
  return linkedList.removeDups();
}

console.log(checkDups(list));
