// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import {
  getEdgeMap,
  getVerticesMap,
  DirectedGraph,
  DirectedVertex,
  DirectedEdge,
} from 'src/Algorithms Elluminated Part2/Graph';

import { MinHeap } from '@data-structures/MinHeap';

const S: DirectedVertex = {
  id: 'S',
  out_edges: ['SV', 'SW'],
};
const V: DirectedVertex = {
  id: 'V',
  out_edges: ['VT', 'VW'],
  in_edges: ['SV'],
};
const W: DirectedVertex = {
  id: 'W',
  in_edges: ['SW'],
  out_edges: ['WT'],
};
const T: DirectedVertex = {
  id: 'T',
  in_edges: ['VT', 'WT'],
};

const _SV: DirectedEdge = { id: 'SV', source: 'S', target: 'V', length: 1 };
const _SW: DirectedEdge = { id: 'SW', source: 'S', target: 'W', length: 4 };
const _VW: DirectedEdge = { id: 'VW', source: 'V', target: 'W', length: 2 };
const _VT: DirectedEdge = { id: 'VT', source: 'V', target: 'T', length: 6 };
const _WT: DirectedEdge = { id: 'WT', source: 'W', target: 'T', length: 3 };

const graph: DirectedGraph = {
  vertices: [S, V, W, T],
  edges: [_SV, _SW, _VW, _VT, _WT],
};

export function HeapDijkstra(graph: DirectedGraph, start: DirectedVertex): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph, v => {
    v.length = Infinity;
    if (!v.out_edges) v.out_edges = [];
    return v;
  });
  const edgesMap = getEdgeMap(graph);
  start.length = 0; // crucial step, this will make sure very first extractMin will fetch start vertex

  const X = new Map();
  // gather all vertices, including start vertex
  const printEL = (el: DirectedVertex) => `${el.id}:${el.length === Infinity ? '∞' : el.length}`;
  const V_X = graph.vertices.reduce((heap, vertex) => {
    heap.insert(vertex);
    return heap;
  }, new MinHeap<DirectedVertex>({ getKey: v => v.length!, printEL }, false));

  console.log('\nInitialize X, V_X, while V_X.size > 0');
  while (!V_X.isEmpty()) {
    console.log(`...X: ${JSON.stringify(Array.from(X.keys()))}, V_X: ${JSON.stringify(V_X.bin_tree_arr.map(printEL))}`);
    const w = V_X.extractMin()!; // vertex 'w' minimum Dijkstra score
    console.log(
      `\n...Second round tournament, extracted w vertex: '${w.id}' with minimum Dijkstra score ${w.length} - min{(length(v1) + length(v1->w)), (length(v2) + length(v2->w)), ...)}`
    );

    X.set(w.id, w);
    // Invariant:
    //The key of a vertex w ∈ V_X is the minimum Dijkstra
    //is the minimum Dijkstra score of an edge with tail v ∈ X and
    // , or Infinity such edge exists.
    console.log(`\n...Maintaining invariant, for affected vertices: ${JSON.stringify(w.out_edges)}`);

    for (let i = 0; i < w.out_edges!.length; i++) {
      const edge = edgesMap[w.out_edges![i]];
      const y: DirectedVertex = verticesMap[edge.target]; // vertex on right side of frontier
      const position = V_X.bin_tree_arr.indexOf(y);
      V_X.delete(position);
      console.log(`......Deleted ${printEL(y)} vertex from V_X: ${JSON.stringify(V_X.bin_tree_arr.map(printEL))}`);

      console.log(
        `......First round tournament, recalculate ${y.id} vertex dijkstra score: Min(${y.length!}, ${w.length! +
          edge.length!})`
      );

      y.length = Math.min(y.length!, w.length! + edge.length!);
      V_X.insert(y);
      console.log(
        `......Inserted ${y.id} vertex with new dijkstra score '${y.length!}' to V_X: ${JSON.stringify(
          V_X.bin_tree_arr.map(printEL)
        )}`
      );
    }
  }

  return graph.vertices;
}

console.log(
  'Print shortest path from start vertex to other vertices in graph: ',
  JSON.stringify(HeapDijkstra(graph, S).map(v => `${v.id}-${v.length}`))
);
