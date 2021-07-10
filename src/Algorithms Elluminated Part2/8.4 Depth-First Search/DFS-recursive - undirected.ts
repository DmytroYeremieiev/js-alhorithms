// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { UndirectedEdge, UndirectedVertex, UndirectedGraph, getEdgeMap, getVerticesMap } from '../Graph';

const S: UndirectedVertex = {
  id: 'S',
  edges: ['1', '3'],
  layer: Infinity
};
const A: UndirectedVertex = {
  id: 'A',
  edges: ['1', '2'],
  layer: Infinity
};
const B: UndirectedVertex = {
  id: 'B',
  edges: ['3', '4', '5'],
  layer: Infinity
};
const C: UndirectedVertex = {
  id: 'C',
  edges: ['2', '6', '4', '8'],
  layer: Infinity
};

const D: UndirectedVertex = {
  id: 'D',
  edges: ['7', '6', '5'],
  layer: Infinity
};
const E: UndirectedVertex = {
  id: 'E',
  edges: ['8', '7'],
  layer: Infinity
};

const e1: UndirectedEdge = { id: '1', vertices: ['A', 'S'], weight: 1 };
const e2: UndirectedEdge = { id: '2', vertices: ['A', 'C'], weight: 2 };
const e3: UndirectedEdge = { id: '3', vertices: ['S', 'B'], weight: 3 };
const e4: UndirectedEdge = { id: '4', vertices: ['B', 'C'], weight: 4 };
const e5: UndirectedEdge = { id: '5', vertices: ['D', 'B'], weight: 5 };
const e6: UndirectedEdge = { id: '6', vertices: ['C', 'D'], weight: 6 };
const e7: UndirectedEdge = { id: '7', vertices: ['E', 'D'], weight: 7 };
const e8: UndirectedEdge = { id: '8', vertices: ['E', 'C'], weight: 8 };

const graph: UndirectedGraph = {
  vertices: [S, A, B, C, D, E],
  edges: [e1,e2,e3,e4,e5,e6,e7,e8],
};

export function findReachableVerticesFromUndirectedGraph(graph: UndirectedGraph, startVertex: UndirectedVertex): UndirectedVertex[] {
  const verticesMap = getVerticesMap(graph);
  const edgesMap = getEdgeMap(graph);

  _findReachableVerticesFromUndirectedGraph(graph, startVertex, verticesMap, edgesMap);
  return graph.vertices.filter(v => v.explored);
}
export function _findReachableVerticesFromUndirectedGraph(graph: UndirectedGraph, startVertex: UndirectedVertex, 
    verticesMap: {  [key: string]: UndirectedVertex; }, 
    edgesMap: {  [key: string]: UndirectedEdge; }
  ) {
  if(startVertex.explored){
    console.log(`...'${startVertex.id}' is already explored, returning..`);
    return;
  }
  startVertex.explored = true;
  console.log(`Verifying startVertex '${startVertex?.id}' edges: `);
  for (let i = 0; i < startVertex.edges.length; i++) {
    const edgeId = startVertex.edges[i];
    const edge = edgesMap[edgeId];
    const targetVertex = verticesMap[edge.vertices[0] === startVertex.id ? edge.vertices[1] : edge.vertices[0]];

    console.log(`startVertex '${startVertex.id}' edge '${edge.id}', triggering '${targetVertex.id}' exploration:`);
    _findReachableVerticesFromUndirectedGraph(graph, targetVertex, verticesMap, edgesMap)
  }
}

console.log(
  'DFS-recursive undirected',
  findReachableVerticesFromUndirectedGraph(graph, S).map(v => `${v.id}`)
);
