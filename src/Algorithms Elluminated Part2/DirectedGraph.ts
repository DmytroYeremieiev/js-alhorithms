export type Edge = Vertex[];

export interface Vertex {
  out_edges?: Edge[];
  in_edges?: Edge[];
  name: string;
}

export interface DirectedGraph {
  vertices: Vertex[];
  edges: Edge[];
}
