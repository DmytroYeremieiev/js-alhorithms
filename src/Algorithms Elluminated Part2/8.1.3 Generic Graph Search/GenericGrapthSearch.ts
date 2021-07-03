// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { Edge, DirectedGraph, Vertex } from '../Graph';

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
  in_edges: ['SV', 'UV'],
  out_edges: ['VW'],
};
const W: Vertex = {
  id: 'W',
  out_edges: ['WU'],
  in_edges: ['VW'],
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
const _VW: Edge = { id: 'W', source: 'V', target: 'W' };
const _YX: Edge = { id: 'YX', source: 'Y', target: 'X' };

const graph: DirectedGraph = {
  vertices: [S, U, V, W, X, Y, Z],
  edges: [_YX, _VW, _WU, _UV, _SV, _SU],
};

export function findReachableVertices(graph: DirectedGraph, start: Vertex): Vertex[] {
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    store[vertex.id] = vertex;
    return store;
  }, {} as { [key: string]: Vertex });
  start.explored = true;
  for (let i = 0; i < graph.edges.length; i++) {
    const edge = graph.edges[i];
    const source = verticesMap[edge.source];
    const target = verticesMap[edge.target];
    console.log(`verifying ${source.id} -> ${target.id} edge: `);
    if (source.explored && !target.explored) {
      target.explored = true;
      console.log(`...target ${target.id} is explored`);
    } else {
      console.log(`...target ${target.id} CANNOT BE REACHED!`);
    }
  }
  const reachableVertices = graph.vertices.filter(v => v.explored);
  return reachableVertices;
}

console.log(
  'findReachableVertices',
  findReachableVertices(graph, S).map(v => v.id)
);
