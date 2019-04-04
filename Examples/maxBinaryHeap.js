class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    // while (true) {
    let parentIdx = Math.floor((idx - 1) / 2);
    console.log('PI:', parentIdx, idx);
    // }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(22);
heap.insert(25);
heap.insert(75);
