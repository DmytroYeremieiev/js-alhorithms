// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { DirectedGraph, UndirectedEdge, getEdgeMap, getVerticesMap, DirectedVertex, DirectedEdge } from '../Graph';

const S: DirectedVertex = {
  id: 'S',
  out_edges: ['1', '3'],
  in_edges: [],
  layer: Infinity,
};
const V: DirectedVertex = {
  id: 'V',
  out_edges: ['2'],
  in_edges: ['1'],
  layer: Infinity,
};
const W: DirectedVertex = {
  id: 'W',
  out_edges: ['4'],
  in_edges: ['3'],
  layer: Infinity,
};
const T: DirectedVertex = {
  id: 'T',
  in_edges: ['2', '4'],
  out_edges: [],
  layer: Infinity,
};

const e1: DirectedEdge = { id: '1', source: 'S', target: 'V', weight: 1 };
const e2: DirectedEdge = { id: '2', source: 'V', target: 'T', weight: 2 };
const e3: DirectedEdge = { id: '3', source: 'S', target: 'W', weight: 3 };
const e4: DirectedEdge = { id: '4', source: 'W', target: 'T', weight: 4 };

const graph: DirectedGraph = {
  vertices: [S, V, W, T],
  edges: [e1, e2, e3, e4],
};

export function findReachableVerticesFromUndirectedGraph(
  graph: DirectedGraph,
  startVertex: DirectedVertex
): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph, vertex => {
    vertex.explored = false;
    return vertex;
  });
  const edgesMap = getEdgeMap(graph);
  const currentOrderRef = { current: graph.vertices.length };
  for (let i = 0; i < graph.vertices.length; i++) {
    const v = graph.vertices[i];
    if (!v.explored) {
      _findReachableVerticesFromUndirectedGraph(graph, startVertex, currentOrderRef, verticesMap, edgesMap);
    }
  }
  return graph.vertices;
}
export function _findReachableVerticesFromUndirectedGraph(
  graph: DirectedGraph,
  startVertex: DirectedVertex,
  currentOrderRef: { current: number },
  verticesMap: { [key: string]: DirectedVertex },
  edgesMap: { [key: string]: DirectedEdge }
) {
  startVertex.explored = true;
  console.log(`Verifying startVertex '${startVertex.id}' edges: `);

  for (let i = 0; i < startVertex.out_edges.length; i++) {
    const outEdge = edgesMap[startVertex.out_edges[i]];
    const targetVertex = verticesMap[outEdge.target];

    if (targetVertex.explored) {
      console.log(`startVertex '${startVertex.id}', edge '${outEdge.id}', '${targetVertex.id}' is already explored!`);
      continue;
    }
    console.log(`startVertex '${startVertex.id}', edge '${outEdge.id}', triggering '${targetVertex.id}' exploration:`);
    _findReachableVerticesFromUndirectedGraph(graph, targetVertex, currentOrderRef, verticesMap, edgesMap);
  }
  startVertex.order = currentOrderRef.current;
  currentOrderRef.current = currentOrderRef.current - 1;
  console.log(`assigning startVertex '${startVertex.id}' an order: ${startVertex.order}`);
}
const res = findReachableVerticesFromUndirectedGraph(graph, S).map(v => `${v.id}-${v.order}`);
console.log('\nDFS-recursive undirected: ', JSON.stringify(res));
