import { Heap } from './Heap';

// MinHeap is a concrete implementation of abstract Priority Queue
export class MinHeap<T> extends Heap<T> {
  extractMin(): T | undefined {
    if (this.debug) {
      console.log(`\nHeap.extractMin:`);
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
  bubble_down(p: number) {
    const item = this.bin_tree_arr[p];
    if (!item) return;
    const leftChildPosition = this.get_left_child_position(p);
    const rightChildPosition = this.get_right_child_position(p);
    const minChildPosition =
      this.bin_tree_arr[leftChildPosition] > this.bin_tree_arr[rightChildPosition]
        ? rightChildPosition
        : leftChildPosition;
    if (item > this.bin_tree_arr[minChildPosition]) {
      if (this.debug) console.log(`......bubble_down, swap ${item} with ${this.bin_tree_arr[minChildPosition]}`);
      this.swap(p, minChildPosition);
      this.bubble_down(minChildPosition);
    }
  }
  bubble_up(p: number) {
    const parentPosition = this.get_parent_position(p);
    if (parentPosition === -1) {
      return; /* at root of heap, no parent */
    }
    if (this.bin_tree_arr[parentPosition] > this.bin_tree_arr[p]) {
      if (this.debug)
        console.log(`......bubble_up, swap ${this.bin_tree_arr[p]} with ${this.bin_tree_arr[parentPosition]}`);
      this.swap(p, parentPosition);
      this.bubble_up(parentPosition);
    }
  }
}

const heap = new MinHeap(
  [
    {
      id: 'A',
      length: 3,
    },
    {
      id: 'B',
      length: Infinity,
    },
    {
      id: 'C',
      length: 1,
    },
  ],
  el => el.length,
  true
);
// heap.extractMin();
// heap.insert(11);

// heap.insert(1);
// heap.insert(10);
// heap.insert(16);
// heap.insert(14);
// heap.insert(3);
// heap.extractMin();
// heap.extractMin();
// heap.extractMin();
// heap.delete(0);
// heap.delete(heap.size() - 1);
// heap.delete(Math.floor(heap.size() / 2));
