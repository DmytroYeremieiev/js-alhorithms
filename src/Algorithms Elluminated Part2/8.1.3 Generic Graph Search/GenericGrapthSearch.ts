// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { Edge, DirectedGraph, Vertex } from '../DirectedGraph';

const S: Vertex = {
  name: 'A',
};
const U: Vertex = {
  name: 'U',
};
const V: Vertex = {
  name: 'V',
};
const W: Vertex = {
  name: 'W',
};

const X: Vertex = {
  name: 'X',
};
const Y: Vertex = {
  name: 'Y',
};

const Z: Vertex = {
  name: 'Y',
};

const _SU: Edge = [S, U];
const _SV: Edge = [S, V];
const _UV: Edge = [U, V];
const _WU: Edge = [W, U];
const _WV: Edge = [W, V];
const _YX: Edge = [Y, X];

S.out_edges = [_SU, _SV];
U.out_edges = [_UV];
U.in_edges = [_SU, _WU];
V.in_edges = [_SV, _UV, _WV];
W.out_edges = [_WU, _WV];

X.in_edges = [_YX];
Y.out_edges = [_YX];

const graph: DirectedGraph = {
  vertices: [S, U, V, W, X, Y, Z],
  edges: [_SU, _SV, _UV, _WU, _WV, _YX],
};

export function findReachableVertices(graph: DirectedGraph, startingVertex: Vertex): Vertex[] {
  return graph.vertices;
}

console.log('findReachableVertices', findReachableVertices(graph, S));
