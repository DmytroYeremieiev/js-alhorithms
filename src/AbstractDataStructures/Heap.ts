// Other names Priority Queue
class Heap<T> {
  bin_tree_arr: T[] = [];
  length = 0;
  hash: { [key: string]: T } = {};
  constructor(array: T[], geyKey: (el: T) => number) {
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      this.insert(el);
    }
  }
  private get_parent_position(n: number): number {
    if (n < 2) return -1;
    return Math.floor(n / 2);
  }
  private get_left_child_position(n: number): number {
    const position = 2 * n;
    if (position > length - 1) return -1;
    return 2 * n;
  }
  private get_right_child_position(n: number): number {
    const position = 2 * n + 1;
    if (position > length - 1) return -1;
    return position;
  }
  insert(el: T) {
    this.length = this.length + 1;
    const initial_position = this.length - 1;
    this.bin_tree_arr[initial_position] = el;
    this.bubble_up(initial_position);
  }
  swap(position1: number, position2: number) {
    const temp = this.bin_tree_arr[position1];
    this.bin_tree_arr[position1] = this.bin_tree_arr[position2];
    this.bin_tree_arr[position2] = temp;
  }
  bubble_up(p: number) {
    if (this.get_parent_position(p) === -1) {
      return; /* at root of heap, no parent */
    }
    if (this.bin_tree_arr[this.get_parent_position(p)] > this.bin_tree_arr[p]) {
      this.swap(p, this.get_parent_position(p));
      this.bubble_up(this.get_parent_position(p));
    }
  }
  // ExtractMin(): T {}
}

const heap = new Heap([4, 4, 8, 9, 4, 12, 9, 11, 13], el => el);