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
    V.out_edges = [];
    return v;
  });
  const edgesMap = getEdgeMap(graph);
  let edges = [...start.out_edges!];
  while (edges.length > 0) {
    let minEdge: DirectedEdge = edgesMap[edges[0]];
    for (let e = 0; e < edges.length; e++) {
      const edge: DirectedEdge = edgesMap[edges[e]];
      const source: DirectedVertex = verticesMap[edge.source];
      const edgeScore = source.length! + edge.length!;
      if (edgeScore < minEdge.score!) {
        minEdge = edge;
      }
    }
    const source = verticesMap[minEdge.target];
    const target = verticesMap[minEdge.target];
    target.length = source.length! + minEdge.length!;
    edges = [...edges, ...target.out_edges!];
  }

  return [start];
}

console.log(
  'Print shortest path from start vertex to other vertices in graph: ',
  JSON.stringify(StraightforwardDijkstra(graph, S).map(v => `${v.id}-${v.length}`))
);
