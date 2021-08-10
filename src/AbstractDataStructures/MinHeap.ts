import { HeapPrintable } from './Heap';

// MinHeap is a concrete implementation of abstract Priority Queue
class MinHeap<T> extends HeapPrintable<T> {
  constructor(array: T[], getKey: (el: T) => number) {
    super(array, getKey);
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      this.insert(el);
    }
  }
  get_parent_position(n: number): number {
    if (n === 0) return -1;
    return Math.floor((n - 1) / 2);
  }
  get_left_child_position(n: number): number {
    const position = 2 * n + 1;
    if (position > this.bin_tree_arr.length) return -1;
    return position;
  }
  get_right_child_position(n: number): number {
    const position = 2 * n + 1 + 1;
    if (position > this.bin_tree_arr.length) return -1;
    return position;
  }
  insert(el: T, log = false) {
    if (log) console.log(`\nHeap.insert ${el}:`);
    if (log) this.log();
    const end_position = this.bin_tree_arr.length;
    const key = this.getKey(el);
    this.bin_tree_arr[end_position] = key;
    this.hash.set(key, el);
    this.bubble_up(end_position, log);
    if (log) this.log();
  }
  extract(log = false): T | undefined {
    if (log) console.log(`\nHeap.extractMin`);
    if (log) this.log();
    const lastKey = this.bin_tree_arr.pop();
    if (!lastKey) return;
    const firstKey = this.bin_tree_arr[0];
    this.bin_tree_arr[0] = lastKey;
    const el = this.hash.get(firstKey);
    if (log) console.log(`\n...extracted ${el}, replaced with ${lastKey}`);
    this.bubble_down(0, log);
    if (log) this.log();
    return el;
  }

  swap(position1: number, position2: number) {
    const temp = this.bin_tree_arr[position1];
    this.bin_tree_arr[position1] = this.bin_tree_arr[position2];
    this.bin_tree_arr[position2] = temp;
  }
  bubble_down(p: number, log: boolean) {
    const item = this.bin_tree_arr[p];
    const leftChildPosition = this.get_left_child_position(p);
    const rightChildPosition = this.get_right_child_position(p);
    const minChildPosition =
      this.bin_tree_arr[leftChildPosition] > this.bin_tree_arr[rightChildPosition]
        ? rightChildPosition
        : leftChildPosition;
    if (item > this.bin_tree_arr[minChildPosition]) {
      if (log) console.log(`bubble_down, swap ${item} with ${this.bin_tree_arr[minChildPosition]}`);
      this.swap(p, minChildPosition);
      this.bubble_down(minChildPosition, log);
    }
  }
  bubble_up(p: number, log: boolean) {
    const parentPosition = this.get_parent_position(p);
    if (parentPosition === -1) {
      return; /* at root of heap, no parent */
    }
    if (this.bin_tree_arr[parentPosition] > this.bin_tree_arr[p]) {
      if (log) console.log(`bubble_up, swap ${this.bin_tree_arr[p]} with ${this.bin_tree_arr[parentPosition]}`);
      this.swap(p, parentPosition);
      this.bubble_up(parentPosition, log);
    }
  }
}

const heap = new MinHeap([4, 2, 8, 9, 4, 12, 9, 11, 13], el => el);
heap.insert(11, true);
heap.insert(1, true);
heap.insert(10, true);
heap.insert(16, true);
heap.insert(14, true);
heap.insert(3, true);
heap.extract(true);
heap.extract(true);
heap.extract(true);
