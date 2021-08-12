import { expect } from 'chai';
import { Heap } from './Heap';

// MinHeap is a concrete implementation of abstract Priority Queue
export class MaxHeap<T> extends Heap<T> {
  extractMax(): T | undefined {
    if (this.debug) {
      console.log(`\nHeap.extractMax:`);
      console.log(`...before:`);
      this.log();
    }
    const res = super.extract();
    if (this.debug) {
      console.log(`\n...after:`);
      this.log();
    }
    return res;
  }
  findMax(): T | undefined {
    return this.bin_tree_arr[0];
  }
  bubble_down(p: number) {
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
      if (this.debug)
        console.log(
          `......bubble_down, swap ${this.printEL(item)} with ${this.printEL(this.bin_tree_arr[minChildPosition])}`
        );
      this.swap(p, minChildPosition);
      this.bubble_down(minChildPosition);
    }
  }
  bubble_up(p: number) {
    const parentPosition = this.get_parent_position(p);
    if (parentPosition === -1) {
      return; /* at root of heap, no parent */
    }
    if (this.bin_tree_arr[parentPosition] < this.bin_tree_arr[p]) {
      if (this.debug)
        console.log(`......bubble_up, swap ${this.bin_tree_arr[p]} with ${this.bin_tree_arr[parentPosition]}`);
      this.swap(p, parentPosition);
      this.bubble_up(parentPosition);
    }
  }
}

const heap = new MaxHeap(
  {
    array: [4, 2, 8, 9, 4, 12, 9, 11, 13],
    getKey: el => el,
    printEL: el => el + '',
  },
  false
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
