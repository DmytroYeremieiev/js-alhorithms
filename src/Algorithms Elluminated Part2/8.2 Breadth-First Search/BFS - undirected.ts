// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { UndirectedEdge, UndirectedVertex, UndirectedGraph } from '../Graph';

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

const SA: UndirectedEdge = { id: 'SA', vertices: ['A', 'S'] };
const SB: UndirectedEdge = { id: 'SB', vertices: ['B', 'S'] };
const AC: UndirectedEdge = { id: 'AC', vertices: ['A', 'C'] };
const BC: UndirectedEdge = { id: 'BC', vertices: ['C', 'B'] };
const BD: UndirectedEdge = { id: 'BD', vertices: ['B', 'D'] };
const DC: UndirectedEdge = { id: 'DC', vertices: ['D', 'C'] };
const EC: UndirectedEdge = { id: 'EC', vertices: ['E', 'C'] };
const ED: UndirectedEdge = { id: 'ED', vertices: ['E', 'D'] };

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
  }, {} as { [key: string]: UndirectedEdge });

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
