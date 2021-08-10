export abstract class Heap<T> {
  bin_tree_arr: number[] = [];
  hash: Map<number, T> = new Map();
  getKey: (el: T) => number;
  constructor(array?: T[], getKey?: (el: T) => number) {
    this.getKey = getKey || (el => +el);
  }
  abstract get_parent_position(n: number): number;
  abstract get_left_child_position(n: number): number;
  abstract get_right_child_position(n: number): number;
  abstract insert(el: T, log: boolean): void;
  abstract extract(log: boolean): T | undefined;
  abstract swap(position1: number, position2: number): void;
  abstract bubble_down(p: number, log: boolean): void;
  abstract bubble_up(p: number, log: boolean): void;
}

export abstract class HeapPrintable<T> extends Heap<T> {
  constructor(array?: T[], getKey?: (el: T) => number) {
    super(array, getKey);
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
