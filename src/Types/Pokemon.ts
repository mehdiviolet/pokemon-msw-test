export interface Typology {
  name: string;
  icon_url: string;
  icon_name: string;
}

export interface Energy {
  name: string;
  icon_url: string;
}

export interface Vulnerability {
  icon_url: string;
  value: number;
}

export interface PokemonListItem {
  id: string;
  name: string;
  short_description: string;
  image_url: string;
}

export interface PokemonDetail {
  id: string;
  name: string;
  subtitle: string;
  card_number: string;
  level: number;
  health_points: number;
  rarity: string;
  short_description: string;
  long_description: string;
  typology: Typology;
  energy: Energy;
  vulnerability: Vulnerability;
  extra_details: string;
  image_url: string;
}

export type JobStatus = "idle" | "queued" | "running" | "done" | "failed";

export interface JobResponse {
  job_id: string;
}

export interface JobStatusResponse {
  status: JobStatus;
  progress: number;
  health_points: number | null;
}
export type CardStates = "default" | "warning" | "dead";
