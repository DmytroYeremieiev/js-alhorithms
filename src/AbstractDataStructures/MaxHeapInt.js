class BinaryTree {
    constructor({ array = [], getKey = el => +el, printEL = el => `${el}` }, debug = false) {
        this.bin_tree_arr = [];
        this.debug = debug;
        this.getKey = getKey;
        this.printEL = printEL;
        for (let i = 0; i < array.length; i++) {
            this.bin_tree_arr[i] = array[i];
        }
    }
}
class BinaryTreeDebugable extends BinaryTree {
    log() {
        let l = 0;
        const total_levels = Math.floor(Math.log2(this.bin_tree_arr.length));
        console.log(`...total levels ${total_levels}, inner array(${this.bin_tree_arr.length}): ${JSON.stringify(this.bin_tree_arr.map(this.printEL))}`);
        const sorted = Array.from(this.bin_tree_arr).sort((a, b) => this.getKey(a) - this.getKey(b));
        const maxElement = this.printEL(sorted[sorted.length - 1]);
        const maxKeyLength = maxElement.length;
        while (l <= total_levels) {
            this.printLevel(l, total_levels, maxKeyLength);
            l++;
        }
    }
    printLevel(level, total_levels, maxKeyLength) {
        if (total_levels === 0) {
            console.log(`––– ${this.printEL(this.bin_tree_arr[0])} –––`);
            return;
        }
        const level_size = Math.pow(2, level);
        const start = level_size - 1;
        const keys = this.bin_tree_arr.slice(start, start + level_size);
        let offset = 0;
        let distance = 0;
        if (level === 0) {
            offset = Math.pow(2, total_levels - level) - 1;
            distance = 0;
        }
        else if (total_levels !== level) {
            distance = Math.pow(2, total_levels - level + 1) - 1;
            offset = Math.pow(2, total_levels - level) - 1;
        }
        else if (total_levels === level) {
            offset = 0;
            distance = Math.pow(2, total_levels - level);
        }
        let out_str = `${this.fillSpace(offset, maxKeyLength + 2)}`;
        const fillerArray = Array.from(Array(level_size - keys.length));
        const _keys = [...keys, ...fillerArray];
        for (let i = 0; i < _keys.length; i++) {
            const element = _keys[i] ? this.printEL(_keys[i]) : '';
            const between = this.fillSpace(i === _keys.length - 1 ? 0 : distance, maxKeyLength + 2);
            const node = this.wrapKeyInSpace(element, maxKeyLength, element ? '0' : '–');
            const nodeStr = element ? ` ${node} ` : `–${node}–`;
            out_str += `${nodeStr}${between}`;
        }
        out_str += `${this.fillSpace(offset, maxKeyLength + 2)}`;
        console.log(out_str);
    }
    wrapKeyInSpace(key, maxKeyLength, filler = '0') {
        const offset = maxKeyLength - key.length;
        return `${this.fillSpace(offset, 1, filler)}${key}`;
    }
    fillSpace(count, multiplier, filler = '–') {
        let res = '';
        for (let i = 0; i < count * multiplier; i++) {
            res += filler;
        }
        return res;
    }
}
class Heap extends BinaryTreeDebugable {
    constructor({ array = [], getKey = el => +el, printEL = el => `${el}` }, debug = false) {
        super({ array, getKey, printEL }, debug);
        if (this.debug) {
            console.log(`new Heap(): ${JSON.stringify(this.bin_tree_arr.map(this.printEL))}`);
            this.log();
        }
        for (let p = Math.floor(this.bin_tree_arr.length / 2); p >= 0; p--) {
            this.bubble_down(p);
        }
        if (this.debug)
            this.log();
    }
    size() {
        return this.bin_tree_arr.length;
    }
    isEmpty() {
        return this.bin_tree_arr.length === 0;
    }
    delete(position) {
        const deleteElem = this.bin_tree_arr[position];
        if (this.debug) {
            console.log(`\nHeap.delete a ${this.printEL(deleteElem)}, on a ${position}-th position:`);
            console.log(`...before:`);
            this.log();
        }
        if (this.bin_tree_arr.length === 0 || !deleteElem)
            return;
        const lastElem = this.bin_tree_arr.pop();
        if (lastElem === deleteElem) {
            if (this.debug) {
                console.log(`\n...after:`);
                this.log();
            }
            return;
        }
        this.bin_tree_arr[position] = lastElem;
        if (this.debug) {
            console.log(`\n...${this.printEL(deleteElem)} replacing with ${this.printEL(lastElem)}:`);
            this.log();
            console.log(`...restoring balance:`);
        }
        this.bubble_down(position);
        if (this.debug) {
            console.log(`\n...rebalanced:`);
            this.log();
        }
    }
    get_parent_position(n) {
        if (n === 0)
            return -1;
        return Math.floor((n - 1) / 2);
    }
    get_left_child_position(n) {
        const position = 2 * n + 1;
        if (position > this.bin_tree_arr.length - 1)
            return -1;
        return position;
    }
    get_right_child_position(n) {
        const position = 2 * n + 1 + 1;
        if (position > this.bin_tree_arr.length - 1)
            return -1;
        return position;
    }
    insert(el) {
        const end_position = this.bin_tree_arr.length;
        this.bin_tree_arr[end_position] = el;
        if (this.debug) {
            console.log(`\nHeap.insert ${this.printEL(el)} to the end:`);
            this.log();
            console.log(`...restoring balance:`);
        }
        this.bubble_up(end_position);
        if (this.debug) {
            console.log(`\n...after:`);
            this.log();
        }
    }
    extract() {
        if (this.bin_tree_arr.length === 0)
            return;
        if (this.bin_tree_arr.length === 1) {
            const el = this.bin_tree_arr[0];
            this.bin_tree_arr.pop();
            return el;
        }
        const lastElem = this.bin_tree_arr.pop();
        const firstElem = this.bin_tree_arr[0];
        this.bin_tree_arr[0] = lastElem;
        if (this.debug) {
            console.log(`\n...extracted ${this.printEL(firstElem)}, restoring balance: `);
            console.log(`......${this.printEL(firstElem)} replaced with ${this.printEL(lastElem)}`);
        }
        this.bubble_down(0);
        return firstElem;
    }
    swap(position1, position2) {
        const temp = this.bin_tree_arr[position1];
        this.bin_tree_arr[position1] = this.bin_tree_arr[position2];
        this.bin_tree_arr[position2] = temp;
    }
}
class MaxHeap extends Heap {
    extractMax() {
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
    findMax() {
        return this.bin_tree_arr[0];
    }
    bubble_down(p) {
        const item = this.bin_tree_arr[p];
        if (!item)
            return;
        const elemKey = this.getKey(item);
        const leftChildPosition = this.get_left_child_position(p);
        const rightChildPosition = this.get_right_child_position(p);
        const leftKey = leftChildPosition >= 0 ? this.getKey(this.bin_tree_arr[leftChildPosition]) : -Infinity;
        const rightKey = rightChildPosition >= 0 ? this.getKey(this.bin_tree_arr[rightChildPosition]) : -Infinity;
        const minChildPosition = leftKey < rightKey ? rightChildPosition : leftChildPosition;
        const minChildKey = minChildPosition >= 0 ? this.getKey(this.bin_tree_arr[minChildPosition]) : -Infinity;
        if (elemKey < minChildKey) {
            if (this.debug)
                console.log(`......bubble_down, swap ${this.printEL(item)} with ${this.printEL(this.bin_tree_arr[minChildPosition])}`);
            this.swap(p, minChildPosition);
            this.bubble_down(minChildPosition);
        }
    }
    bubble_up(p) {
        const parentPosition = this.get_parent_position(p);
        if (parentPosition === -1) {
            return;
        }
        if (this.bin_tree_arr[parentPosition] < this.bin_tree_arr[p]) {
            if (this.debug)
                console.log(`......bubble_up, swap ${this.bin_tree_arr[p]} with ${this.bin_tree_arr[parentPosition]}`);
            this.swap(p, parentPosition);
            this.bubble_up(parentPosition);
        }
    }
}
const heap = new MaxHeap({
    array: [4, 2, 8, 9, 4, 12, 9, 11, 13],
    getKey: el => el,
    printEL: el => el + '',
}, true);
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
