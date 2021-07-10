type id = string | number;

export interface Edge {
  weight?: number;
  id: id;
}

export interface Vertex  {
  id: id;
  layer: number;
  explored?: boolean;
  connectedComponentsIndex?: number;
}

export interface DirectedEdge extends Edge {
  source: id;
  target: id;
}
export interface UndirectedEdge extends Edge  {
  vertices: id[]
}

export interface DirectedVertex extends Vertex {
  out_edges?: id[];
  in_edges?: id[];
}

export interface UndirectedVertex extends Vertex {
  edges: id[];
}


export interface Graph<V,E> {
  vertices: V[];
  edges: E[];
}
export interface DirectedGraph extends Graph<DirectedVertex,DirectedEdge> {};
export interface UndirectedGraph extends Graph<UndirectedVertex,UndirectedEdge> {};

export const getVerticesMap = <V extends Vertex, E extends Edge>(graph: Graph<V,E>)=>{
  const verticesMap = graph.vertices.reduce((store, vertex) => {
    vertex.layer = Infinity;
    store[vertex.id] = vertex;
    return store;
  }, {} as { [key: string]: V });
  return verticesMap
}
export const getEdgeMap = <V extends Vertex, E extends Edge>(graph: Graph<V,E>)=>{
  const edgesMap = graph.edges.reduce((store, edge) => {
    store[edge.id] = edge;
    return store;
  }, {} as { [key: string]: E });
  return edgesMap
}
