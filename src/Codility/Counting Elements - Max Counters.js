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
const heap = new MaxHeap({
  array: [4, 2, 8, 9, 4, 12, 9, 11, 13],
  getKey: el => el,
});

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const c_map = new Map();
  const heap = new MaxHeap({
    array: [],
  });
  for (let i = 0; i < N; i++) {
    c_map.set(i, 0);
  }

  for (let i = 0; i < A.length; i++) {
    const c_id = A[i] - 1;
    if (c_id === N) {
      const max_c_value = heap.findMax();
      for (const [c_id] of c_map) {
        c_map.set(c_id, max_c_value);
      }
    } else {
      const new_c_value = c_map.get(c_id) + 1;
      heap.insert(new_c_value);
      c_map.set(c_id, new_c_value);
    }
  }
  return Array.from(c_map.values());
}

solution(5, [3, 4, 4, 6, 1, 4, 4]); //output [3, 2, 2, 4, 2]
