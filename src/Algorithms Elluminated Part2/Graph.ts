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
  edges?: id[];
  explored?: boolean;
  id: id;
}

export interface DirectedGraph {
  vertices: DirectedVertex[];
  edges: DirectedEdge[];
}
export interface UndirectedGraph {
  vertices: UndirectedVertex[];
  edges: UndirectedEdge[];
}