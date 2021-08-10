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

const S: DirectedVertex = {
  id: 'S',
  out_edges: ['SV', 'SW'],
};
const V: DirectedVertex = {
  id: 'V',
  out_edges: ['VT', 'VW'],
  in_edges: ['SV'],
};
const W: DirectedVertex = {
  id: 'W',
  in_edges: ['WT'],
  out_edges: ['SW'],
};
const T: DirectedVertex = {
  id: 'T',
  in_edges: ['VT', 'WT'],
};

const _SV: DirectedEdge = { id: 'SV', source: 'S', target: 'V', length: 1 };
const _SW: DirectedEdge = { id: 'SW', source: 'S', target: 'W', length: 4 };
const _VW: DirectedEdge = { id: 'VW', source: 'V', target: 'W', length: 2 };
const _VT: DirectedEdge = { id: 'VT', source: 'V', target: 'T', length: 6 };
const _WT: DirectedEdge = { id: 'WT', source: 'W', target: 'T', length: 3 };

const graph: DirectedGraph = {
  vertices: [S, V, W, T],
  edges: [_SV, _SW, _VW, _VT, _WT],
};

export function StraightforwardDijkstra(graph: DirectedGraph, start: DirectedVertex): DirectedVertex[] {
  const verticesMap = getVerticesMap(graph, v => {
    v.length = Infinity;
    if (!v.out_edges) v.out_edges = [];
    return v;
  });
  start.length = 0;
  // const edgesMap = getEdgeMap(graph);

  const X = new Map([[start.id, start]]);
  const V_X = new Map(Object.entries(verticesMap));
  V_X.delete(start.id);
  console.log('Initialize X, V_X, while V_X.size > 0');
  while (V_X.size > 0) {
    let minEdge = null;
    console.log(`...X: ${JSON.stringify(Array.from(X.keys()))}, V_X.size: ${JSON.stringify(Array.from(V_X.keys()))}`);
    console.log(`...Find an edge from X to V_T set with minimizing Dijkstra score: (source.length + edge.length)`);
    for (let i = 0; i < graph.edges.length; i++) {
      const edge = graph.edges[i];
      if (!X.has(edge.source) || !V_X.has(edge.target)) {
        console.log(`......skip an edge: '${edge.id}' not connecting X and V_X`);
        continue;
      }
      const source: DirectedVertex = verticesMap[edge.source];
      edge.score = source.length! + edge.length!;
      if (!minEdge || edge.score < minEdge?.score!) {
        minEdge = edge;
        console.log(`......an edge: '${edge.id}' with Dijkstra score: ${edge.score}`);
      } else {
        console.log(`......skip an edge: '${edge.id}' with Dijkstra score: ${edge.score}`);
      }
    }
    const source = verticesMap[minEdge?.source!];
    const target = verticesMap[minEdge?.target!];
    target.length = source.length! + minEdge?.length!;
    console.log(`...pick the edge: '${minEdge?.id}' with minimizing Dijkstra score: ${target.length}`);
    console.log(`...move the edge tail '${target.id}' vertex from 'V_X' to 'X' set\n`);
    V_X.delete(target.id);
    X.set(target.id, target);
  }

  return graph.vertices;
}

console.log(
  'Print shortest path from start vertex to other vertices in graph: ',
  JSON.stringify(StraightforwardDijkstra(graph, S).map(v => `${v.id}-${v.length}`))
);
