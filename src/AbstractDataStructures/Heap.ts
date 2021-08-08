// Other names Priority Queue
class Heap<T> {
  bin_tree_arr: number[] = [];
  length = 0;
  hash: { [key: string]: T } = {};
  getKey: (el: T) => number;
  constructor(array: T[], getKey: (el: T) => number) {
    this.getKey = getKey || (el => +el);
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      this.insert(el);
    }
  }
  private get_parent_position(n: number): number {
    if (n === 0) return -1;
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
    const key = this.getKey(el);
    this.bin_tree_arr[initial_position] = key;
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
  log() {
    let l = 0;
    const total_levels = Math.ceil(Math.log2(this.length));
    console.log(`Total length: ${this.length} and heap levels ${total_levels}`);
    while (l < total_levels) {
      this.printLevel(l, total_levels);
      l++;
    }
  }
  printLevel(level: number, total_levels: number) {
    const level_size = Math.pow(2, level);
    const start = level_size - 1;
    // console.log(`level ${level}, starts at position: ${start}, size: ${level_size}`);
    const keys = this.bin_tree_arr.slice(start, start + level_size);
    let offset = null;
    let distance = null;
    if (level === 0) {
      distance = 0;
      offset = Math.pow(2, total_levels - level - 1) - 1;
    } else {
      distance = Math.pow(2, total_levels - level) - 1;
      offset = Math.pow(2, total_levels - level - 1) - 1;
    }
    // console.log(`distance: ${distance}, offset: ${offset}`);
    const latestEl = this.bin_tree_arr[this.bin_tree_arr.length - 1];
    const maxKeyLength = (Math.log(latestEl) * Math.LOG10E + 1) | 0;
    let out_str = `${this.fillSpace(offset, maxKeyLength)}`;
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      const space =
        i === keys.length - 1 ? this.fillSpace(offset, maxKeyLength) : this.fillSpace(distance, maxKeyLength);
      out_str += this.wrapKeyInSpace(element, maxKeyLength) + space;
    }
    console.log(out_str);
  }
  wrapKeyInSpace(key: number, maxKeyLength: number) {
    const keyLength = (Math.log(key) * Math.LOG10E + 1) | 0;
    const offset = maxKeyLength - keyLength;
    return `${this.fillSpace(offset, 1, '0')}${key}`;
  }
  fillSpace(count: number, multiplier: number, filler = '–'): string {
    let res = '';

    for (let i = 0; i < count * multiplier; i++) {
      res += filler;
    }
    return res;
  }
  // ExtractMin(): T {}
}
//[4, 4, 8, 9, 4, 12, 9, 11, 13]
const heap = new Heap([4, 4, 8, 9, 4, 12, 9, 11, 13], el => el);
heap.log();
// console.log(`Heap, ${heap.length}, ${heap.bin_tree_arr.length}: ${JSON.stringify(heap.bin_tree_arr)}`);
