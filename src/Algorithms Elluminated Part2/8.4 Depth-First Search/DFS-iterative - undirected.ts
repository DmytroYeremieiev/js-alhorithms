// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { UndirectedEdge, UndirectedVertex, UndirectedGraph } from '../Graph';

const S: UndirectedVertex = {
  id: 'S',
  edges: ['3', '1'],
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
  edges: ['2', '8', '4', '6'],
  layer: Infinity
};

const D: UndirectedVertex = {
  id: 'D',
  edges: ['5', '6', '7'],
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
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    vertex.layer = Infinity;
    store[vertex.id] = vertex;
    return store;
  }, {} as { [key: string]: UndirectedVertex });
  const edgesMap = graph.edges.reduce((store, edge) => {
    store[edge.id] = edge;
    return store;
  }, {} as { [key: string]: UndirectedEdge });

  const reachableVertexQueue: UndirectedVertex[] = [startVertex];
  while (reachableVertexQueue.length > 0) {
    const sourceVertex = reachableVertexQueue.pop();
    if(!sourceVertex) break;
    if(sourceVertex?.explored){
      console.log(`sourceVertex ${sourceVertex?.id} is already explored `);
      continue;
    }else{
      sourceVertex.explored = true;
    }
    console.log(`verifying sourceVertex ${sourceVertex?.id} edges: `);
    sourceVertex?.edges?.forEach(edgeId => {
      const edge = edgesMap[edgeId];
      let targetVertex = null
      if(verticesMap[edge.vertices[0]].id === sourceVertex.id) {
        targetVertex = verticesMap[edge.vertices[1]]
      }else{
        targetVertex = verticesMap[edge.vertices[0]]
      }
      reachableVertexQueue.push(targetVertex);
      console.log(`...edge ${edge.id}, targetVertex ${targetVertex.id} added to stack`);

    });
  }
  const reachableVertices = graph.vertices.filter(v => v.explored);
  return reachableVertices;
}

console.log(
  'DFS-iterative undirected',
  findReachableVerticesFromUndirectedGraph(graph, S).map(v => `${v.id}`)
);
