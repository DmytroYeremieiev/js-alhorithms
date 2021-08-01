type id = string | number;

export interface Edge {
  length?: number;
  score?: number;
  id: id;
}

export interface Vertex {
  id: id;
  length?: number;
  explored?: boolean;
  connectedComponentsIndex?: number;
  layer?: number;
}

export interface DirectedEdge extends Edge {
  source: id;
  target: id;
}
export interface UndirectedEdge extends Edge {
  vertices: id[];
}

export interface DirectedVertex extends Vertex {
  out_edges?: id[];
  in_edges?: id[];
  order?: number;
}

export interface UndirectedVertex extends Vertex {
  edges: id[];
}

export interface Graph<V, E> {
  vertices: V[];
  edges: E[];
}
export type DirectedGraph = Graph<DirectedVertex, DirectedEdge>;
export type UndirectedGraph = Graph<UndirectedVertex, UndirectedEdge>;

export const getVerticesMap = <V extends Vertex, E extends Edge>(graph: Graph<V, E>, init?: (vertex: V) => V) => {
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    store[vertex.id] = init ? init(vertex) : vertex;
    return store;
  }, {} as { [key: string]: V });
  return verticesMap;
};
export const getEdgeMap = <V extends Vertex, E extends Edge>(graph: Graph<V, E>, init?: (edge: E) => E) => {
  const edgesMap = graph.edges.reduce((store, edge) => {
    store[edge.id] = init ? init(edge) : edge;
    return store;
  }, {} as { [key: string]: E });
  return edgesMap;
};
