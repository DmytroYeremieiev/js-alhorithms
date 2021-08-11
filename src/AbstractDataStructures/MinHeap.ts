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
    const leftKey = leftChildPosition >= 0 ? this.getKey(this.bin_tree_arr[leftChildPosition]) : Infinity;
    const rightKey = rightChildPosition >= 0 ? this.getKey(this.bin_tree_arr[rightChildPosition]) : Infinity;
    const minChildPosition = leftKey > rightKey ? rightChildPosition : leftChildPosition;
    const minChildKey = minChildPosition >= 0 ? this.getKey(this.bin_tree_arr[minChildPosition]) : Infinity;
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

// const heap = new MinHeap(
//   {
//     array: [
//       {
//         id: 'A',
//         length: 3,
//       },
//       {
//         id: 'B',
//         length: Infinity,
//       },
//       {
//         id: 'C',
//         length: 1,
//       },
//     ],
//     getKey: el => el.length,
//     printEL: el => `${el.id}:${el.length === Infinity ? '∞' : el.length}`,
//   },
//   true
// );
// heap.extractMin();
// const heap1 = new MinHeap({ array: [4, 2, 8, 9, 4, 12, 9, 11, 13], getKey: el => el }, true);
// heap1.insert(11);

// heap1.insert(1);
// heap1.insert(10);
// heap1.insert(16);
// heap1.insert(14);
// heap1.insert(3);
// heap1.extractMin();
// heap1.extractMin();
// heap1.extractMin();
// heap1.delete(0);
// heap1.delete(heap1.size() - 1);
// heap1.delete(Math.floor(heap1.size() / 2));
