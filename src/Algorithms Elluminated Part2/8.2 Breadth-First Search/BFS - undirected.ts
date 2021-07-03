// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { Edge, UndirectedVertex, UndirectedGraph } from '../Graph';

const S: UndirectedVertex = {
  id: 'S',
  edges: ['SU', 'SV'],
};
const U: UndirectedVertex = {
  id: 'U',
  edges: ['UV'],
};
const V: UndirectedVertex = {
  id: 'V',
  edges: ['VW'],
};
const W: UndirectedVertex = {
  id: 'W',
  edges: ['WU'],
};

const X: UndirectedVertex = {
  id: 'X',
  edges: ['YX'],
};
const Y: UndirectedVertex = {
  id: 'Y',
  edges: ['YX'],
};

const Z: UndirectedVertex = {
  id: 'Y',
};

const _SU: Edge = { id: 'SU', source: 'S', target: 'U' };
const _SV: Edge = { id: 'SV', source: 'S', target: 'V' };
const _UV: Edge = { id: 'UV', source: 'U', target: 'V' };
const _WU: Edge = { id: 'WU', source: 'W', target: 'U' };
const _VW: Edge = { id: 'VW', source: 'V', target: 'W' };
const _YX: Edge = { id: 'YX', source: 'Y', target: 'X' };

const graph: UndirectedGraph = {
  vertices: [S, U, V, W, X, Y, Z],
  edges: [_YX, _VW, _WU, _UV, _SV, _SU],
};

export function findReachableVerticesFromUndirectedGraph(graph: UndirectedGraph, start: UndirectedVertex): UndirectedVertex[] {
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    store[vertex.id] = vertex;
    return store;
  }, {} as { [key: string]: UndirectedVertex });
  const edgesMap = graph.edges.reduce((store, edge) => {
    store[edge.id] = edge;
    return store;
  }, {} as { [key: string]: Edge });

  start.explored = true;
  const reachableVertexQueue: UndirectedVertex[] = [start];
  while (reachableVertexQueue.length > 0) {
    const source = reachableVertexQueue.shift();
    console.log(`verifying ${source?.id} out_edges: `);
    source?.edges?.forEach(id => {
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
  'undirected',
  findReachableVerticesFromUndirectedGraph(graph, S).map(v => v.id)
);
