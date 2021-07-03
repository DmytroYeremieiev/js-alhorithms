type id = string;

export interface Edge {
  source: id;
  target: id;
  weight?: number;
  id: id;
}

export interface Vertex  {
  explored?: boolean;
  id: id;
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
  edges: Edge[];
}
export interface UndirectedGraph {
  vertices: UndirectedVertex[];
  edges: Edge[];
}
