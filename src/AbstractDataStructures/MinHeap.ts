// Other names Priority Queue
class MinHeap<T> {
  bin_tree_arr: number[] = [];
  hash: Map<number, T> = new Map();
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
    return Math.floor((n - 1) / 2);
  }
  private get_left_child_position(n: number): number {
    const position = 2 * n + 1;
    if (position > this.bin_tree_arr.length) return -1;
    return position;
  }
  private get_right_child_position(n: number): number {
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
  extractMin(log = false): T | undefined {
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
  log() {
    let l = 0;
    const total_levels = Math.floor(Math.log2(this.bin_tree_arr.length));
    console.log(
      `\n...total levels ${total_levels}, inner array(${this.bin_tree_arr.length}): ${JSON.stringify(
        this.bin_tree_arr
      )}`
    );
    const sorted = Array.from(this.bin_tree_arr).sort((a, b) => a - b);
    const maxElement = sorted[sorted.length - 1];
    const maxKeyLength = (Math.log(maxElement) * Math.LOG10E + 1) | 0;
    while (l <= total_levels) {
      this.printLevel(l, total_levels, maxKeyLength);
      l++;
    }
  }
  printLevel(level: number, total_levels: number, maxKeyLength: number) {
    if (total_levels === 0) {
      console.log(`––– ${this.bin_tree_arr[0]} –––`);
      return;
    }
    const level_size = Math.pow(2, level);
    const start = level_size - 1;
    // console.log(
    //   `......level ${level}, starts at position: ${start}, size: ${level_size}, total_levels: ${total_levels}, maxKeyLength: ${maxKeyLength}`
    // );
    const keys = this.bin_tree_arr.slice(start, start + level_size);

    let offset = 0;
    let distance = 0;

    if (level === 0) {
      offset = Math.pow(2, total_levels - level) - 1;
      distance = 0;
    } else if (total_levels !== level) {
      distance = Math.pow(2, total_levels - level + 1) - 1;
      offset = Math.pow(2, total_levels - level) - 1;
    } else if (total_levels === level) {
      offset = 0;
      distance = Math.pow(2, total_levels - level);
    }
    // console.log(`......distance: ${distance}, offset: ${offset}, keys: ${keys.length}`);
    let out_str = `${this.fillSpace(offset, maxKeyLength + 2)}`;
    const fillerArray = Array.from(Array(level_size - keys.length));
    const _keys = [...keys, ...fillerArray];
    for (let i = 0; i < _keys.length; i++) {
      const element = _keys[i];
      const between = this.fillSpace(i === _keys.length - 1 ? 0 : distance, maxKeyLength + 2);
      const node = this.wrapKeyInSpace(element ?? '', maxKeyLength, element ? '0' : '–');
      const nodeStr = element ? ` ${node} ` : `–${node}–`;
      out_str += `${nodeStr}${between}`;
    }
    out_str += `${this.fillSpace(offset, maxKeyLength + 2)}`;
    console.log(out_str);
  }
  wrapKeyInSpace(key: number, maxKeyLength: number, filler = '0') {
    const keyLength = (Math.log(key) * Math.LOG10E + 1) | 0;
    const offset = maxKeyLength - keyLength;
    return `${this.fillSpace(offset, 1, filler)}${key}`;
  }
  fillSpace(count: number, multiplier: number, filler = '–'): string {
    let res = '';
    for (let i = 0; i < count * multiplier; i++) {
      res += filler;
    }
    return res;
  }
}

const heap = new MinHeap([4, 2, 8, 9, 4, 12, 9, 11, 13], el => el);
heap.insert(11, true);
heap.insert(1, true);
heap.insert(10, true);
heap.insert(16, true);
heap.insert(14, true);
heap.insert(3, true);
heap.extractMin(true);
heap.extractMin(true);
heap.extractMin(true);
