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
    const elemKey = this.getKey(item);
    const leftChildPosition = this.get_left_child_position(p);
    const rightChildPosition = this.get_right_child_position(p);
    const minChildPosition =
      this.getKey(this.bin_tree_arr[leftChildPosition]) > this.getKey(this.bin_tree_arr[rightChildPosition])
        ? rightChildPosition
        : leftChildPosition;
    const minChildKey = this.getKey(this.bin_tree_arr[minChildPosition]);
    if (elemKey > minChildKey) {
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
    const parentKey = this.getKey(this.bin_tree_arr[parentPosition]);
    const elemKey = this.getKey(this.bin_tree_arr[p]);
    if (parentKey > elemKey) {
      if (this.debug)
        console.log(
          `......bubble_up, swap ${this.printEL(this.bin_tree_arr[p])} with ${this.printEL(
            this.bin_tree_arr[parentPosition]
          )}`
        );
      this.swap(p, parentPosition);
      this.bubble_up(parentPosition);
    }
  }
}

const heap = new MinHeap(
  {
    array: [
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
    getKey: el => el.length,
    getName: el => el.id,
  },
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
