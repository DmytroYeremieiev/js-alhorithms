// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { DirectedGraph, DirectedVertex, DirectedEdge } from '../Graph';

const S: DirectedVertex = {
  id: 'S',
  out_edges: ['SU', 'SV'],
};
const U: DirectedVertex = {
  id: 'U',
  out_edges: ['UV'],
  in_edges: ['SU', 'WU'],
};
const V: DirectedVertex = {
  id: 'V',
  in_edges: ['SV', 'UV'],
  out_edges: ['VW'],
};
const W: DirectedVertex = {
  id: 'W',
  out_edges: ['WU'],
  in_edges: ['VW'],
};

const X: DirectedVertex = {
  id: 'X',
  in_edges: ['YX'],
};
const Y: DirectedVertex = {
  id: 'Y',
  out_edges: ['YX'],
};

const Z: DirectedVertex = {
  id: 'Y',
};

const _SU: DirectedEdge = { id: 'SU', source: 'S', target: 'U' };
const _SV: DirectedEdge = { id: 'SV', source: 'S', target: 'V' };
const _UV: DirectedEdge = { id: 'UV', source: 'U', target: 'V' };
const _WU: DirectedEdge = { id: 'WU', source: 'W', target: 'U' };
const _VW: DirectedEdge = { id: 'VW', source: 'V', target: 'W' };
const _YX: DirectedEdge = { id: 'YX', source: 'Y', target: 'X' };

const graph: DirectedGraph = {
  vertices: [S, U, V, W, X, Y, Z],
  edges: [_YX, _VW, _WU, _UV, _SV, _SU],
};

export function findReachableVerticesFromDirectedGraph(graph: DirectedGraph, start: DirectedVertex): DirectedVertex[] {
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    store[vertex.id] = vertex;
    return store;
  }, {} as { [key: string]: DirectedVertex });
  const edgesMap = graph.edges.reduce((store, edge) => {
    store[edge.id] = edge;
    return store;
  }, {} as { [key: string]: DirectedEdge });

  start.explored = true;
  const reachableVertexQueue: DirectedVertex[] = [start];
  while (reachableVertexQueue.length > 0) {
    const source = reachableVertexQueue.shift();
    console.log(`verifying ${source?.id} out_edges: `);
    source?.out_edges?.forEach(id => {
      const edge = edgesMap[id];
      const target = verticesMap[edge.target];
      if(!target.explored){
        target.explored = true;
        reachableVertexQueue.push(target);
        console.log(`...target ${target.id} marked as explored`);
      }else{
        console.log(`...target ${target.id} is already explored`);
      }
    });
  }
  const reachableVertices = graph.vertices.filter(v => v.explored);
  return reachableVertices;
}

console.log(
  'Figure 8.2 - directed',
  findReachableVerticesFromDirectedGraph(graph, S).map(v => v.id)
);
