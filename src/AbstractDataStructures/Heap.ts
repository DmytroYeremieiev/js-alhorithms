export abstract class BinaryTree<T> {
  bin_tree_arr: T[] = [];
}
export abstract class BinaryTreeDebugable extends BinaryTree<number> {
  log() {
    let l = 0;
    const total_levels = Math.floor(Math.log2(this.bin_tree_arr.length));
    console.log(
      `...total levels ${total_levels}, inner array(${this.bin_tree_arr.length}): ${JSON.stringify(
        this.bin_tree_arr.map(e => e.toString())
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
export abstract class Heap<T> extends BinaryTreeDebugable {
  hash: Map<number, T> = new Map();
  getKey: (el: T) => number;
  debug: boolean;
  constructor(array: T[] = [], getKey?: (el: T) => number, debug = false) {
    super();
    this.debug = debug;
    this.getKey = getKey || (el => +el);
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      this.insert(el);
    }
  }
  size(): number {
    return this.bin_tree_arr.length;
  }
  isEmpty(): boolean {
    return this.bin_tree_arr.length === 0;
  }
  delete(position: number): void {
    const deleteKey = this.bin_tree_arr[position];
    if (this.debug) {
      console.log(`\nHeap.delete a ${deleteKey} key, on a ${position}-th position:`);
      console.log(`...before:`);
      this.log();
    }
    if (this.bin_tree_arr.length === 0 || !deleteKey) return;

    const lastKey = this.bin_tree_arr.pop();
    if (lastKey === deleteKey) {
      this.hash.delete(position);
      if (this.debug) {
        console.log(`\n...after:`);
        this.log();
      }
      return;
    }
    this.bin_tree_arr[position] = lastKey!;
    if (this.debug) {
      console.log(`\n...${deleteKey} replacing with ${lastKey}:`);
      this.log();
      console.log(`...restoring balance:`);
    }
    this.bubble_down(position);
    if (this.debug) {
      console.log(`\n...rebalanced:`);
      this.log();
    }
    this.hash.delete(position);
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
  insert(el: T) {
    const end_position = this.bin_tree_arr.length;
    const key = this.getKey(el);
    this.bin_tree_arr[end_position] = key;
    this.hash.set(key, el);
    if (this.debug) {
      console.log(`\nHeap.insert ${JSON.stringify(el)}, key: ${key} to the end:`);
      this.log();
      console.log(`...restoring balance:`);
    }
    this.bubble_up(end_position);
    if (this.debug) {
      console.log(`\n...after:`);
      this.log();
    }
  }
  extract(): T | undefined {
    if (this.bin_tree_arr.length === 0) return;
    if (this.bin_tree_arr.length === 1) {
      const el = this.hash.get(this.bin_tree_arr[0]);
      this.bin_tree_arr.pop();
      return el;
    }
    const lastKey = this.bin_tree_arr.pop()!;
    const firstKey = this.bin_tree_arr[0];
    this.bin_tree_arr[0] = lastKey;
    const el = this.hash.get(firstKey);
    if (this.debug) {
      console.log(`\n...extracted ${JSON.stringify(el)}, restoring balance: `);
      console.log(`......${firstKey} replaced with ${lastKey}`);
    }
    this.bubble_down(0);
    return el;
  }

  swap(position1: number, position2: number) {
    const temp = this.bin_tree_arr[position1];
    this.bin_tree_arr[position1] = this.bin_tree_arr[position2];
    this.bin_tree_arr[position2] = temp;
  }
  abstract bubble_down(p: number): void;
  abstract bubble_up(p: number): void;
}
