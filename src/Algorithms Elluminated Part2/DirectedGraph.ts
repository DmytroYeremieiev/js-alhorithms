type id = string;

export interface Edge {
  source: id;
  target: id;
  weight?: number;
  id: id;
}

export interface Vertex {
  out_edges?: id[];
  in_edges?: id[];
  id: id;
}

export interface DirectedGraph {
  vertices: Vertex[];
  edges: Edge[];
}
