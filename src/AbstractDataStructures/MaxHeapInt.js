class Heap {
  constructor({ array = [], getKey = el => +el }) {
    this.bin_tree_arr = [];
    this.getKey = getKey;
    for (let i = 0; i < array.length; i++) {
      this.bin_tree_arr[i] = array[i];
    }
    for (let p = Math.floor(this.bin_tree_arr.length / 2); p >= 0; p--) {
      this.bubble_down(p);
    }
  }
  size() {
    return this.bin_tree_arr.length;
  }
  isEmpty() {
    return this.bin_tree_arr.length === 0;
  }
  delete(position) {
    const deleteElem = this.bin_tree_arr[position];
    if (this.bin_tree_arr.length === 0 || !deleteElem) return;
    const lastElem = this.bin_tree_arr.pop();
    if (lastElem === deleteElem) {
      return;
    }
    this.bin_tree_arr[position] = lastElem;
    this.bubble_down(position);
  }
  get_parent_position(n) {
    if (n === 0) return -1;
    return Math.floor((n - 1) / 2);
  }
  get_left_child_position(n) {
    const position = 2 * n + 1;
    if (position > this.bin_tree_arr.length - 1) return -1;
    return position;
  }
  get_right_child_position(n) {
    const position = 2 * n + 1 + 1;
    if (position > this.bin_tree_arr.length - 1) return -1;
    return position;
  }
  insert(el) {
    const end_position = this.bin_tree_arr.length;
    this.bin_tree_arr[end_position] = el;
    this.bubble_up(end_position);
  }
  extract() {
    if (this.bin_tree_arr.length === 0) return;
    if (this.bin_tree_arr.length === 1) {
      const el = this.bin_tree_arr[0];
      this.bin_tree_arr.pop();
      return el;
    }
    const lastElem = this.bin_tree_arr.pop();
    const firstElem = this.bin_tree_arr[0];
    this.bin_tree_arr[0] = lastElem;
    this.bubble_down(0);
    return firstElem;
  }
  swap(position1, position2) {
    const temp = this.bin_tree_arr[position1];
    this.bin_tree_arr[position1] = this.bin_tree_arr[position2];
    this.bin_tree_arr[position2] = temp;
  }
}
class MaxHeap extends Heap {
  extractMax() {
    const res = super.extract();
    return res;
  }
  findMax() {
    return this.bin_tree_arr[0];
  }
  bubble_down(p) {
    const item = this.bin_tree_arr[p];
    if (!item) return;
    const elemKey = this.getKey(item);
    const leftChildPosition = this.get_left_child_position(p);
    const rightChildPosition = this.get_right_child_position(p);
    const leftKey = leftChildPosition >= 0 ? this.getKey(this.bin_tree_arr[leftChildPosition]) : -Infinity;
    const rightKey = rightChildPosition >= 0 ? this.getKey(this.bin_tree_arr[rightChildPosition]) : -Infinity;
    const minChildPosition = leftKey < rightKey ? rightChildPosition : leftChildPosition;
    const minChildKey = minChildPosition >= 0 ? this.getKey(this.bin_tree_arr[minChildPosition]) : -Infinity;
    if (elemKey < minChildKey) {
      this.swap(p, minChildPosition);
      this.bubble_down(minChildPosition);
    }
  }
  bubble_up(p) {
    const parentPosition = this.get_parent_position(p);
    if (parentPosition === -1) {
      return;
    }
    if (this.bin_tree_arr[parentPosition] < this.bin_tree_arr[p]) {
      this.swap(p, parentPosition);
      this.bubble_up(parentPosition);
    }
  }
}
const heap = new MaxHeap(
  {
    array: [4, 2, 8, 9, 4, 12, 9, 11, 13],
    getKey: el => el,
  }
);
heap.insert(11);
heap.insert(1);
heap.insert(10);
heap.insert(16);
heap.insert(14);
heap.insert(3);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.delete(0);
heap.delete(heap.size() - 1);
heap.delete(Math.floor(heap.size() / 2));
heap.delete(1);
