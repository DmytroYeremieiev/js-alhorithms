// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { Edge, DirectedGraph, Vertex } from '../DirectedGraph';

const S: Vertex = {
  id: 'S',
  out_edges: ['SU', 'SV'],
};
const U: Vertex = {
  id: 'U',
  out_edges: ['UV'],
  in_edges: ['SU', 'WU'],
};
const V: Vertex = {
  id: 'V',
  in_edges: ['SV', 'UV', 'WV'],
};
const W: Vertex = {
  id: 'W',
  out_edges: ['WU', 'WV'],
};

const X: Vertex = {
  id: 'X',
  in_edges: ['YX'],
};
const Y: Vertex = {
  id: 'Y',
  out_edges: ['YX'],
};

const Z: Vertex = {
  id: 'Y',
};

const _SU: Edge = { id: 'SU', source: 'S', target: 'U' };
const _SV: Edge = { id: 'SV', source: 'S', target: 'V' };
const _UV: Edge = { id: 'UV', source: 'U', target: 'V' };
const _WU: Edge = { id: 'WU', source: 'W', target: 'U' };
const _WV: Edge = { id: 'W', source: 'W', target: 'V' };
const _YX: Edge = { id: 'YX', source: 'Y', target: 'X' };

const graph: DirectedGraph = {
  vertices: [S, U, V, W, X, Y, Z],
  edges: [_SU, _SV, _UV, _WU, _WV, _YX],
};

export function findReachableVertices(graph: DirectedGraph, startingVertex: Vertex): Vertex[] {
  return graph.vertices;
}

console.log('findReachableVertices', findReachableVertices(graph, S));
