// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { Edge, UndirectedVertex, UndirectedGraph } from '../Graph';

const S: UndirectedVertex = {
  id: 'S',
  edges: ['SA', 'SB'],
};
const A: UndirectedVertex = {
  id: 'A',
  edges: ['AS', 'AC'],
};
const B: UndirectedVertex = {
  id: 'B',
  edges: ['BS', 'BC', 'BD'],
};
const C: UndirectedVertex = {
  id: 'C',
  edges: ['CA', 'CB', 'CD', 'CE'],
};

const D: UndirectedVertex = {
  id: 'D',
  edges: ['DB', 'DC', 'DE'],
};
const E: UndirectedVertex = {
  id: 'E',
  edges: ['EC', 'ED'],
};

const SA: Edge = { id: 'SA', source: 'S', target: 'A' };
const SB: Edge = { id: 'SB', source: 'S', target: 'B' };
const AC: Edge = { id: 'AC', source: 'A', target: 'C' };
const BC: Edge = { id: 'BC', source: 'B', target: 'C' };
const BD: Edge = { id: 'BD', source: 'B', target: 'D' };
const DC: Edge = { id: 'DC', source: 'D', target: 'C' };
const EC: Edge = { id: 'EC', source: 'E', target: 'C' };
const ED: Edge = { id: 'ED', source: 'E', target: 'D' };

const graph: UndirectedGraph = {
  vertices: [S, A, B, C, D, E],
  edges: [SA, SB, AC, BC, BD, DC, EC, ED],
};

export function findReachableVerticesFromUndirectedGraph(graph: UndirectedGraph, startVertex: UndirectedVertex): UndirectedVertex[] {
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    store[vertex.id] = vertex;
    return store;
  }, {} as { [key: string]: UndirectedVertex });
  const edgesMap = graph.edges.reduce((store, edge) => {
    store[edge.id] = edge;
    return store;
  }, {} as { [key: string]: Edge });

  startVertex.explored = true;
  const reachableVertexQueue: UndirectedVertex[] = [startVertex];
  while (reachableVertexQueue.length > 0) {
    const sourceVertex = reachableVertexQueue.shift();
    console.log(`verifying ${sourceVertex?.id} edges: `);
    sourceVertex?.edges?.forEach(edgeId => {
      const edge = edgesMap[edgeId];
      const targetVertex = verticesMap[edge.target];
      if(targetVertex.id === sourceVertex.id) {
        
      }
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
