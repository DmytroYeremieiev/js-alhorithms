// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import { UndirectedEdge, UndirectedVertex, UndirectedGraph, getVerticesMap, getEdgeMap } from '../Graph';

const v1: UndirectedVertex = {
  id: 'v1',
  edges: ['1', '2'],
  layer: Infinity,
};
const v2: UndirectedVertex = {
  id: 'v2',
  edges: ['6'],
  layer: Infinity,
};
const v3: UndirectedVertex = {
  id: 'v3',
  edges: ['1', '3'],
  layer: Infinity,
};
const v4: UndirectedVertex = {
  id: 'v4',
  edges: ['6'],
  layer: Infinity,
};
const v5: UndirectedVertex = {
  id: 'v5',
  edges: ['2', '3', '4', '5'],
  layer: Infinity,
};
const v6: UndirectedVertex = {
  id: 'v6',
  edges: ['7', '8'],
  layer: Infinity,
};
const v7: UndirectedVertex = {
  id: 'v7',
  edges: ['4'],
  layer: Infinity,
};
const v8: UndirectedVertex = {
  id: 'v8',
  edges: ['7'],
  layer: Infinity,
};
const v9: UndirectedVertex = {
  id: 'v9',
  edges: ['5'],
  layer: Infinity,
};
const v10: UndirectedVertex = {
  id: 'v10',
  edges: ['8'],
  layer: Infinity,
};

const e1: UndirectedEdge = { id: '1', vertices: ['v1', 'v3'], weight: 1 };
const e2: UndirectedEdge = { id: '2', vertices: ['v1', 'v5'], weight: 2 };
const e3: UndirectedEdge = { id: '3', vertices: ['v5', 'v3'], weight: 3 };
const e4: UndirectedEdge = { id: '4', vertices: ['v7', 'v5'], weight: 4 };
const e5: UndirectedEdge = { id: '5', vertices: ['v9', 'v5'], weight: 5 };
const e6: UndirectedEdge = { id: '6', vertices: ['v2', 'v4'], weight: 6 };
const e7: UndirectedEdge = { id: '7', vertices: ['v8', 'v6'], weight: 7 };
const e8: UndirectedEdge = { id: '8', vertices: ['v10', 'v6'], weight: 8 };

const graph: UndirectedGraph = {
  vertices: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10],
  edges: [e1, e2, e3, e4, e5, e6, e7, e8],
};

export function computeConnectedComponentsForUndirectedGraph(graph: UndirectedGraph): UndirectedVertex[] {
  const verticesMap = getVerticesMap(graph, vertex => {
    vertex.layer = Infinity;
    vertex.explored = false;
    return vertex;
  });
  const edgesMap = getEdgeMap(graph);

  let connectedComponentsIndex = 0;

  for (let i = 0; i < graph.vertices.length; i++) {
    const startVertex = graph.vertices[i];
    if (startVertex.explored) {
      console.log(`Vertex ${startVertex.id} is already explored!`);
      continue;
    } else {
      console.log(`Set starting vertex ${startVertex.id} for BFS exploration.`);
    }
    // BFS algorithm starts ...
    connectedComponentsIndex += 1;
    startVertex.explored = true;
    startVertex.layer = 0;
    const reachableVertexQueue: UndirectedVertex[] = [startVertex];

    while (reachableVertexQueue.length > 0) {
      console.log(`...reachableVertexQueue[${reachableVertexQueue.map(v => v.id).join(', ')}]`);
      const sourceVertex = reachableVertexQueue.shift();
      if (!sourceVertex) break;
      sourceVertex.connectedComponentsIndex = connectedComponentsIndex;
      console.log(`...verifying ${sourceVertex?.id}-cc:${connectedComponentsIndex}-l:${sourceVertex?.layer} edges: `);
      sourceVertex.edges?.forEach(edgeId => {
        const edge = edgesMap[edgeId];
        const targetVertex =
          verticesMap[edge.vertices[0]].id === sourceVertex.id
            ? verticesMap[edge.vertices[1]]
            : verticesMap[edge.vertices[0]];
        if (!targetVertex.explored) {
          targetVertex.explored = true;
          targetVertex.layer = sourceVertex.layer + 1;
          reachableVertexQueue.push(targetVertex);
          console.log(`......edge ${edge.id}, targetVertex ${targetVertex.id} marked as explored`);
        } else {
          console.log(`......edge ${edge.id}, targetVertex ${targetVertex.id} is already explored`);
        }
      });
    }
    // BFS algorithm ends ...
  }

  return graph.vertices;
}

const res = computeConnectedComponentsForUndirectedGraph(graph)
  .sort((a, b) => (a.connectedComponentsIndex ?? 0) - (b.connectedComponentsIndex ?? 0))
  .map(v => `${v.id}-cc:${v.connectedComponentsIndex}-l:${v.layer}`);

console.log('computeConnectedComponentsForUndirectedGraph', JSON.stringify(res));
