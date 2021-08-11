import { expect } from 'chai';
import 'mocha';

import { MinHeap } from '../../src/AbstractDataStructures/MinHeap';
import { MaxHeap } from '../../src/AbstractDataStructures/MaxHeap';

describe('Heap', () => {
  it('MinHeap', () => {
    const heap = new MinHeap({ array: [4, 2, 8, 9, 4, 12, 9, 11, 13], getKey: el => el }, true);
    expect(heap.bin_tree_arr).to.be.deep.equal([2, 4, 8, 9, 4, 12, 9, 11, 13]);

    heap.insert(11);
    expect(heap.bin_tree_arr).to.be.deep.equal([2, 4, 8, 9, 4, 12, 9, 11, 13, 11]);

    heap.insert(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([1, 2, 8, 9, 4, 12, 9, 11, 13, 11, 4]);

    heap.insert(10);
    expect(heap.bin_tree_arr).to.be.deep.equal([1, 2, 8, 9, 4, 10, 9, 11, 13, 11, 4, 12]);

    heap.insert(16);
    expect(heap.bin_tree_arr).to.be.deep.equal([1, 2, 8, 9, 4, 10, 9, 11, 13, 11, 4, 12, 16]);

    heap.insert(14);
    expect(heap.bin_tree_arr).to.be.deep.equal([1, 2, 8, 9, 4, 10, 9, 11, 13, 11, 4, 12, 16, 14]);

    heap.insert(3);
    expect(heap.bin_tree_arr).to.be.deep.equal([1, 2, 3, 9, 4, 10, 8, 11, 13, 11, 4, 12, 16, 14, 9]);

    expect(heap.extractMin()).to.be.equal(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([2, 4, 3, 9, 4, 10, 8, 11, 13, 11, 9, 12, 16, 14]);

    expect(heap.extractMin()).to.be.equal(2);
    expect(heap.bin_tree_arr).to.be.deep.equal([3, 4, 8, 9, 4, 10, 14, 11, 13, 11, 9, 12, 16]);

    expect(heap.extractMin()).to.be.equal(3);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 4, 8, 9, 9, 10, 14, 11, 13, 11, 16, 12]);

    heap.delete(0);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 9, 8, 11, 9, 10, 14, 12, 13, 11, 16]);

    heap.delete(heap.size() - 1);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 9, 8, 11, 9, 10, 14, 12, 13, 11]);

    heap.delete(Math.floor(heap.size() / 2));
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 9, 8, 11, 9, 11, 14, 12, 13]);
  });
  it('MinHeap.extractMin', () => {
    const heap = new MinHeap({ array: [1, 2, 4], getKey: el => el }, true);

    expect(heap.extractMin()).to.be.equal(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([2, 4]);

    expect(heap.extractMin()).to.be.equal(2);
    expect(heap.bin_tree_arr).to.be.deep.equal([4]);

    expect(heap.extractMin()).to.be.equal(4);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);
  });
  it('MaxHeap', () => {
    let heap = new MaxHeap({ array: [4, 2, 8, 9, 4, 12, 9, 11, 13], getKey: el => el }, true);
    expect(heap.bin_tree_arr).to.be.deep.equal([13, 12, 9, 11, 4, 4, 9, 2, 8]);

    heap.insert(11);
    expect(heap.bin_tree_arr).to.be.deep.equal([13, 12, 9, 11, 11, 4, 9, 2, 8, 4]);

    heap.insert(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([13, 12, 9, 11, 11, 4, 9, 2, 8, 4, 1]);

    heap.insert(10);
    expect(heap.bin_tree_arr).to.be.deep.equal([13, 12, 10, 11, 11, 9, 9, 2, 8, 4, 1, 4]);

    heap.insert(16);
    expect(heap.bin_tree_arr).to.be.deep.equal([16, 12, 13, 11, 11, 10, 9, 2, 8, 4, 1, 4, 9]);

    heap.insert(14);
    expect(heap.bin_tree_arr).to.be.deep.equal([16, 12, 14, 11, 11, 10, 13, 2, 8, 4, 1, 4, 9, 9]);

    heap.insert(3);
    expect(heap.bin_tree_arr).to.be.deep.equal([16, 12, 14, 11, 11, 10, 13, 2, 8, 4, 1, 4, 9, 9, 3]);

    heap.extractMax();
    expect(heap.bin_tree_arr).to.be.deep.equal([14, 12, 13, 11, 11, 10, 9, 2, 8, 4, 1, 4, 9, 3]);

    heap.extractMax();
    expect(heap.bin_tree_arr).to.be.deep.equal([13, 12, 10, 11, 11, 9, 9, 2, 8, 4, 1, 4, 3]);

    heap.extractMax();
    expect(heap.bin_tree_arr).to.be.deep.equal([12, 11, 10, 8, 11, 9, 9, 2, 3, 4, 1, 4]);

    heap.delete(0);
    expect(heap.bin_tree_arr).to.be.deep.equal([11, 11, 10, 8, 4, 9, 9, 2, 3, 4, 1]);

    heap.delete(heap.size() - 1);
    expect(heap.bin_tree_arr).to.be.deep.equal([11, 11, 10, 8, 4, 9, 9, 2, 3, 4]);

    heap.delete(Math.floor(heap.size() / 2));
    expect(heap.bin_tree_arr).to.be.deep.equal([11, 11, 10, 8, 4, 4, 9, 2, 3]);

    heap.delete(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([11, 8, 10, 3, 4, 4, 9, 2]);

    heap = new MaxHeap({ array: [1, 2, 4], getKey: el => el }, true);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 1, 2]);

    heap.delete(2);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 1]);

    heap.delete(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([4]);

    heap.delete(0);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);

    heap.delete(0);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);

    heap.delete(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);
  });
  it('MaxHeap.delete', () => {
    const heap = new MaxHeap({ array: [1, 2, 4], getKey: el => el }, true);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 1, 2]);

    heap.delete(2);
    expect(heap.bin_tree_arr).to.be.deep.equal([4, 1]);

    heap.delete(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([4]);

    heap.delete(0);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);

    heap.delete(0);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);

    heap.delete(1);
    expect(heap.bin_tree_arr).to.be.deep.equal([]);
  });
});
