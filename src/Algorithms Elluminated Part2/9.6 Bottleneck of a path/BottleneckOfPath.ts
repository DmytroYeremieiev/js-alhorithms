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
  in_edges: ['WT'],
  out_edges: ['SW'],
};
const T: DirectedVertex = {
  id: 'T',
  in_edges: ['VT', 'WT'],
};

const _SV: DirectedEdge = { id: 'SV', source: 'S', target: 'V', length: 3 };
const _SW: DirectedEdge = { id: 'SW', source: 'S', target: 'W', length: 1 };
const _VW: DirectedEdge = { id: 'VW', source: 'V', target: 'W', length: 2 };
const _VT: DirectedEdge = { id: 'VT', source: 'V', target: 'T', length: 6 };
const _WT: DirectedEdge = { id: 'WT', source: 'W', target: 'T', length: 4 };

const graph: DirectedGraph = {
  vertices: [S, V, W, T],
  edges: [_SV, _SW, _VW, _VT, _WT],
};

export function BottleneckOfPath(graph: DirectedGraph, start: DirectedVertex): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph, v => {
    v.length = Infinity;
    if (!v.out_edges) v.out_edges = [];
    return v;
  });
  start.length = 0;
  // const edgesMap = getEdgeMap(graph);

  const X = new Map([[start.id, start]]);
  const V_X = new Map(Object.entries(verticesMap));
  V_X.delete(start.id);
  console.log('Initialize X, V_X, while V_X.size > 0');
  while (V_X.size > 0) {
    let minEdge = null;
    console.log(`...X: ${JSON.stringify(Array.from(X.keys()))}, V_X.size: ${JSON.stringify(Array.from(V_X.keys()))}`);
    console.log(`...Find an edge from X to V_T set with minimum Bottleneck: Math.max(length(v), length(v, w)`);
    for (let i = 0; i < graph.edges.length; i++) {
      const edge = graph.edges[i];
      if (!X.has(edge.source) || !V_X.has(edge.target)) {
        console.log(`......skip an edge: '${edge.id}' not connecting X and V_X`);
        continue;
      }
      const source: DirectedVertex = verticesMap[edge.source];
      edge.score = Math.max(source.length!, edge.length!);
      if (!minEdge || edge.score < minEdge?.score!) {
        minEdge = edge;
        console.log(
          `......the latest edge: '${edge.id}', on the path with a maximum length of one of its edges(Bottleneck): ${edge.score}`
        );
      } else {
        console.log(
          `......skip the latest edge: '${edge.id}', on the path with a maximum length of one of its edges(Bottleneck): ${edge.score}`
        );
      }
    }
    const source = verticesMap[minEdge?.source!];
    const target = verticesMap[minEdge?.target!];
    target.length = Math.max(source.length!, minEdge?.length!);
    console.log(`...pick the edge: '${minEdge?.id}' for the path with minimum Bottleneck: ${target.length}`);
    console.log(`...move '${target.id}' vertex from 'V_X' to 'X' set\n`);
    V_X.delete(target.id);
    X.set(target.id, target);
  }

  return graph.vertices;
}

// Problem 9.7 (S) Consider a directed graph G = (V, E) with non-negative edge lengths and
// a starting vertex s.
// Define the bottleneck of a path to be the maximum length of one of
// its edges (as opposed to the sum of the lengths of its edges).
// Show how to modify Dijkstra’s algorithm to compute, for each vertex v є V,
// the smallest bottleneck of any s-v path. Your algorithm should run in O(mn) time,
// where m and n denote the number of edges and vertices, respectively.
console.log(
  'Define the smallest bottlenecks of a path: ',
  JSON.stringify(BottleneckOfPath(graph, S).map(v => `${v.id}-${v.length}`))
);
