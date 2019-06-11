class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// check if value is > or < than current
// if it's smaller and current.left exists, recursively call function with smaller as value
// if it's larger and current.right exist, recursively call functrion with rightNode as value
// if current is smaller or larger and left or right node doesn't exist, left or right now equals current. return

//        15
//     10    20
//       12

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    let current = this.root;
    function traverse(current, newNode) {
      if (current.value === newNode.value) return null;
      if (current.value < newNode.value) {
        if (current.right !== null) {
          traverse(current.right, newNode);
        } else {
          current.right = newNode;
          return current.right;
        }
      }
      if (current.value > newNode.value) {
        if (current.left !== null) {
          traverse(current.left, newNode);
        } else {
          current.left = newNode;
          return current.left;
        }
      }
    }
    traverse(current, newNode);
  }
}

const bst = new BinarySearchTree();

bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(12);

console.log('Bst =', bst);
