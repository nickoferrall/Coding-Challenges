// find the kth to last element
// assuming it's a singly linked list
// with a double, we could see if k > this.length / 2
// if true, we'd start at the end to find it

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  kToEnd(index) {
    let arr = [];
    let counter = 0;
    if (index === this.length - 1) {
      return this.tail;
    } else {
      let current = this.head;
      while (counter !== this.length) {
        if (counter >= index) {
          arr.push(current.val);
          counter++;
        } else {
          counter++;
        }
        current = current.next;
      }
    }
    return arr;
  }
}

let list = new LinkedList();

list.push('Here we are...');
list.push('Keep pushing!');
list.push('Great work!');
list.push('Here we are...');
list.push('Keep pushing!');
list.push('Great work!');
list.push('Here we are...');
list.push('Keep pushing!');
list.push('Great work!');

console.log(list.kToEnd(4));
