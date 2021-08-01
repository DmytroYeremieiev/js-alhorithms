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

const _SV: DirectedEdge = { id: 'SV', source: 'S', target: 'V' };
const _SW: DirectedEdge = { id: 'SW', source: 'S', target: 'W' };
const _VW: DirectedEdge = { id: 'VW', source: 'V', target: 'W' };
const _VT: DirectedEdge = { id: 'VT', source: 'V', target: 'T' };
const _WT: DirectedEdge = { id: 'WT', source: 'W', target: 'T' };

const graph: DirectedGraph = {
  vertices: [S, V, W, T],
  edges: [_SV, _SW, _VW, _VT, _WT],
};

export function StraitforwardDijkstra(graph: DirectedGraph, start: DirectedVertex): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph);
  const edgesMap = getEdgeMap(graph);
  const X: DirectedVertex[] = [start];
  for (let i = 0; i < X.length; i++) {
    const element = X[i];
  }
  return [start];
}

console.log('Print nodes in boustrophedon order: ', JSON.stringify(BFS(graph, v1).map(v => `${v.id}`)));
