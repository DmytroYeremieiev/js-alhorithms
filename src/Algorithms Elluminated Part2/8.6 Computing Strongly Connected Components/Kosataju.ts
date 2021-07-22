// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { DirectedGraph, getEdgeMap, getVerticesMap, DirectedVertex, DirectedEdge } from '../Graph';

const v1: DirectedVertex = {
  id: 'v1',
  out_edges: ['e1'],
  in_edges: ['e2'],
};
const v3: DirectedVertex = {
  id: 'v3',
  out_edges: ['e4', 'e3'],
  in_edges: ['e1'],
};
const v5: DirectedVertex = {
  id: 'v5',
  out_edges: ['e2', 'e13', 'e14'],
  in_edges: ['e3'],
};
const v11: DirectedVertex = {
  id: 'v11',
  out_edges: ['e5', 'e6'],
  in_edges: ['e4'],
};
const v6: DirectedVertex = {
  id: 'v6',
  out_edges: ['e8'],
  in_edges: ['e5', 'e7'],
};
const v8: DirectedVertex = {
  id: 'v8',
  out_edges: ['e7'],
  in_edges: ['e6', 'e10', 'e9'],
};
const v10: DirectedVertex = {
  id: 'v10',
  out_edges: ['e9'],
  in_edges: ['e8', 'e12'],
};
const v9: DirectedVertex = {
  id: 'v9',
  out_edges: ['e10', 'e11', 'e17'],
  in_edges: ['e13', 'e15'],
};
const v2: DirectedVertex = {
  id: 'v2',
  out_edges: ['e12', 'e18'],
  in_edges: ['e11'],
};
const v7: DirectedVertex = {
  id: 'v7',
  out_edges: ['e15'],
  in_edges: ['e14', 'e16'],
};
const v4: DirectedVertex = {
  id: 'v4',
  out_edges: ['e16'],
  in_edges: ['e17', 'e18'],
};

const e1: DirectedEdge = { id: 'e1', source: 'v1', target: 'v3' };
const e2: DirectedEdge = { id: 'e2', source: 'v5', target: 'v1' };
const e3: DirectedEdge = { id: 'e3', source: 'v3', target: 'v5' };
const e4: DirectedEdge = { id: 'e4', source: 'v3', target: 'v11' };
const e5: DirectedEdge = { id: 'e5', source: 'v11', target: 'v6' };
const e6: DirectedEdge = { id: 'e6', source: 'v11', target: 'v8' };
const e7: DirectedEdge = { id: 'e7', source: 'v8', target: 'v6' };
const e8: DirectedEdge = { id: 'e8', source: 'v6', target: 'v10' };
const e9: DirectedEdge = { id: 'e9', source: 'v10', target: 'v8' };
const e10: DirectedEdge = { id: 'e10', source: 'v9', target: 'v8' };
const e11: DirectedEdge = { id: 'e11', source: 'v9', target: 'v2' };
const e12: DirectedEdge = { id: 'e12', source: 'v2', target: 'v10' };
const e13: DirectedEdge = { id: 'e13', source: 'v5', target: 'v9' };
const e14: DirectedEdge = { id: 'e14', source: 'v5', target: 'v7' };
const e15: DirectedEdge = { id: 'e15', source: 'v7', target: 'v9' };
const e16: DirectedEdge = { id: 'e16', source: 'v4', target: 'v7' };
const e17: DirectedEdge = { id: 'e17', source: 'v9', target: 'v4' };
const e18: DirectedEdge = { id: 'e18', source: 'v2', target: 'v4' };

const graph: DirectedGraph = {
  vertices: [v10, v11, v9, v8, v7, v6, v5, v4, v3, v2, v1], // randomly sorted vertices
  edges: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18],
};
export function findReachableVerticesFromUndirectedGraph_Reversed(
  graph: DirectedGraph,
  verticesMap: { [key: string]: DirectedVertex },
  edgesMap: { [key: string]: DirectedEdge }
): DirectedVertex[] {
  const currentOrderRef = { current: graph.vertices.length };
  console.log('Iterating over all vertices:');
  for (let i = 0; i < graph.vertices.length; i++) {
    const startVertex = graph.vertices[i];
    if (!startVertex.explored) {
      console.log(`Running DFS on '${startVertex.id}' vertex:`);
      _findReachableVerticesFromUndirectedGraph_Reversed(graph, startVertex, currentOrderRef, verticesMap, edgesMap);
    } else {
      console.log(`'${startVertex.id}' is already explored`);
    }
  }
  return graph.vertices.sort((a, b) => a.order! - b.order!);
}
export function _findReachableVerticesFromUndirectedGraph_Reversed(
  graph: DirectedGraph,
  startVertex: DirectedVertex,
  currentOrderRef: { current: number },
  verticesMap: { [key: string]: DirectedVertex },
  edgesMap: { [key: string]: DirectedEdge }
) {
  startVertex.explored = true;
  console.log(`...DFS-start '${startVertex.id}': verifying outer edges[${startVertex.in_edges.length}]: `);

  for (let i = 0; i < startVertex.in_edges.length; i++) {
    const inEdge = edgesMap[startVertex.in_edges[i]];
    const targetVertex = verticesMap[inEdge.source];

    if (targetVertex.explored) {
      console.log(`......'${startVertex.id}': edge '${inEdge.id}', target: '${targetVertex.id}' is already explored!`);
      continue;
    }
    console.log(
      `......'${startVertex.id}': edge '${inEdge.id}', triggering '${targetVertex.id}' exploration and recursing DFS on it:`
    );
    _findReachableVerticesFromUndirectedGraph_Reversed(graph, targetVertex, currentOrderRef, verticesMap, edgesMap);
  }
  startVertex.order = currentOrderRef.current;
  currentOrderRef.current = currentOrderRef.current - 1;
  console.log(`...DFS-end '${startVertex.id}': assigning '${startVertex.id}' an order: ${startVertex.order}`);
  console.log(`...DFS-end '${startVertex.id}': unwind stack up`);
}
export function findConnectedComponentsFromUndirectedGraph(
  graph: DirectedGraph,
  startVertex: DirectedVertex,
  ccIndex: number,
  verticesMap: { [key: string]: DirectedVertex },
  edgesMap: { [key: string]: DirectedEdge }
) {
  startVertex.explored = true;
  startVertex.connectedComponentsIndex = ccIndex;
  console.log(
    `...DFS-start '${startVertex.id}', ccId: ${ccIndex}, verifying outer edges[${startVertex.in_edges.length}]: `
  );

  for (let i = 0; i < startVertex.out_edges.length; i++) {
    const outEdge = edgesMap[startVertex.out_edges[i]];
    const targetVertex = verticesMap[outEdge.target];

    if (targetVertex.explored) {
      console.log(`......'${startVertex.id}': edge '${outEdge.id}', target: '${targetVertex.id}' is already explored!`);
      continue;
    }

    console.log(
      `......'${startVertex.id}': edge '${outEdge.id}', triggering '${targetVertex.id}' exploration(sharing ccId: ${ccIndex}) and recursing DFS on it:`
    );
    findConnectedComponentsFromUndirectedGraph(graph, targetVertex, ccIndex, verticesMap, edgesMap);
  }
  console.log(`...DFS-end '${startVertex.id}': unwind stack up`);
}

export function computeConnectedComponentsForDirectedAcyclicGraph(graph: DirectedGraph): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph, vertex => {
    vertex.explored = false;
    return vertex;
  });
  console.log(
    '------- 1. Assigning topological order on a first pass of Kosaraju algorithm on a reversed Directed Acyclic Graph\n'
  );
  const edgesMap = getEdgeMap(graph);
  findReachableVerticesFromUndirectedGraph_Reversed(graph, verticesMap, edgesMap);
  const sortedVertices = graph.vertices.sort((a, b) => a.order! - b.order!);
  console.log(
    '\n------- 2. Sort vertices[] by topological order:\n',
    JSON.stringify(sortedVertices.map(v => `${v.id}-o:${v.order}`))
  );
  console.log('\n------- 3. Find SCCs in reverse topological order:\n');
  sortedVertices.forEach(v => (v.explored = false));
  let ccIndex = 0;
  for (let i = 0; i < sortedVertices.length; i++) {
    const vertex = sortedVertices[i];
    if (!vertex.explored) {
      ccIndex += 1;
      findConnectedComponentsFromUndirectedGraph(graph, vertex, ccIndex, verticesMap, edgesMap);
    }
  }
  return sortedVertices;
}

const res = computeConnectedComponentsForDirectedAcyclicGraph(graph).map(v => `${v.connectedComponentsIndex}-${v.id}`);
console.log('\ncc for Directed Acyclic Graph : ', JSON.stringify(res));
