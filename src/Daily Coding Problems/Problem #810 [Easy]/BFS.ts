// Identify the vertices of V reachable from s in G = (V, E).
// there, V - vertices, s - starting vertex and s belongs to E.
// Input 1. G = (V, E); 2. s - starting vertex
// Output array of reachable vertices

import {
  getEdgeMap,
  getVerticesMap,
  DirectedGraph,
  DirectedVertex,
  DirectedEdge,
} from 'src/Algorithms Elluminated Part2/Graph';

const v1: DirectedVertex = {
  id: '1',
  out_edges: ['A', 'B'],
  in_edges: [],
};
const v2: DirectedVertex = {
  id: '2',
  out_edges: ['C', 'D'],
  in_edges: [],
};
const v3: DirectedVertex = {
  id: '3',
  out_edges: ['E', 'F'],
  in_edges: [],
};
const v4: DirectedVertex = {
  id: '4',
  out_edges: ['G', 'H'],
  in_edges: [],
};

const v5: DirectedVertex = {
  id: '5',
  out_edges: ['I', 'J'],
  in_edges: [],
};
const v6: DirectedVertex = {
  id: '6',
  out_edges: ['K', 'L'],
  in_edges: [],
};

const v7: DirectedVertex = {
  id: '7',
  out_edges: ['M', 'N'],
  in_edges: [],
};
const v8: DirectedVertex = {
  id: '8',
  out_edges: [],
  in_edges: [],
};
const v9: DirectedVertex = {
  id: '9',
  out_edges: [],
  in_edges: [],
};
const v10: DirectedVertex = {
  id: '10',
  out_edges: [],
  in_edges: [],
};
const v11: DirectedVertex = {
  id: '11',
  out_edges: [],
  in_edges: [],
};
const v12: DirectedVertex = {
  id: '12',
  out_edges: [],
  in_edges: [],
};
const v13: DirectedVertex = {
  id: '13',
  out_edges: [],
  in_edges: [],
};
const v14: DirectedVertex = {
  id: '14',
  out_edges: [],
  in_edges: [],
};
const v15: DirectedVertex = {
  id: '15',
  out_edges: [],
  in_edges: [],
};

const A: DirectedEdge = { id: 'A', source: '1', target: '2' };
const B: DirectedEdge = { id: 'B', source: '1', target: '3' };
const C: DirectedEdge = { id: 'C', source: '2', target: '4' };
const D: DirectedEdge = { id: 'D', source: '2', target: '5' };
const E: DirectedEdge = { id: 'E', source: '3', target: '6' };
const F: DirectedEdge = { id: 'F', source: '3', target: '7' };

const G: DirectedEdge = { id: 'G', source: '4', target: '8' };
const H: DirectedEdge = { id: 'H', source: '4', target: '9' };
const I: DirectedEdge = { id: 'I', source: '5', target: '10' };
const J: DirectedEdge = { id: 'J', source: '5', target: '11' };
const K: DirectedEdge = { id: 'K', source: '6', target: '12' };
const L: DirectedEdge = { id: 'L', source: '6', target: '13' };
const M: DirectedEdge = { id: 'M', source: '7', target: '14' };
const N: DirectedEdge = { id: 'N', source: '7', target: '15' };

const graph: DirectedGraph = {
  vertices: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15],
  edges: [A, B, C, D, E, F, G, H, I, J, K, L, M, N],
};

export function BFS(graph: DirectedGraph, start: DirectedVertex): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph);
  const edgesMap = getEdgeMap(graph);

  start.explored = true;
  start.layer = 0;
  let prevLayer = start.layer - 1;
  let orderedNodes: DirectedVertex[] = [start];
  let orderedNodesPerLayer: DirectedVertex[] = [];

  const reachableVertexQueue: DirectedVertex[] = [start];
  while (reachableVertexQueue.length > 0) {
    const source = reachableVertexQueue.shift();
    if (!source) continue;
    const layerDiff = source.layer! - prevLayer;
    const RightToLeftOrder = source.layer! % 2 === 0;

    if (layerDiff > 1) {
      prevLayer = source.layer! - 1;
      orderedNodes = orderedNodes.concat(orderedNodesPerLayer);
      console.log(
        `\n...Layer diff > 1 -> Flush orderedNodesPerLayer${JSON.stringify(
          orderedNodesPerLayer.map(v => `${v.id}`)
        )} -> orderedNodes: ${JSON.stringify(orderedNodes.map(v => `${v.id}`))}\n`
      );
      orderedNodesPerLayer = [];
    }
    if (!source.out_edges.length) continue;

    console.log(
      `Right-To-Left: ${RightToLeftOrder}, orderedNodes: ${JSON.stringify(orderedNodes.map(v => `${v.id}`))}`
    );
    console.log(`Verifying '${source.id}', layer: ${source.layer}, out_edges[${source.out_edges?.length}]: `);
    for (let i = 0; i < source.out_edges.length; i++) {
      const target = verticesMap[edgesMap[source.out_edges[i]].target];
      target.layer = source.layer! + 1;
      reachableVertexQueue.push(target);
      RightToLeftOrder ? orderedNodesPerLayer.unshift(target) : orderedNodesPerLayer.push(target);
      console.log(`......target '${target.id}', layer: ${target.layer}, marked as explored`);
    }
  }
  return orderedNodes;
}

console.log('Print nodes in boustrophedon order: ', JSON.stringify(BFS(graph, v1).map(v => `${v.id}`)));
