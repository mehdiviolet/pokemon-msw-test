import {
  type PokemonListItem,
  type PokemonDetail,
  type JobResponse,
  type JobStatusResponse,
} from "../types/Pokemon";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

export const getPokemonList = async (): Promise<PokemonListItem[]> => {
  const response = await fetch("/api/items");
  return handleResponse<PokemonListItem[]>(response);
};

export const getPokemonDetail = async (id: string): Promise<PokemonDetail> => {
  const response = await fetch(`/api/items/${id}`);
  return handleResponse<PokemonDetail>(response);
};

export const startBattleJob = async (
  pokemonId: string,
): Promise<JobResponse> => {
  const response = await fetch(`/api/items/${pokemonId}/jobs`, {
    method: "POST",
  });
  return handleResponse<JobResponse>(response);
};

export const getJobStatus = async (
  jobId: string,
): Promise<JobStatusResponse> => {
  const response = await fetch(`/api/jobs/${jobId}`);
  return handleResponse<JobStatusResponse>(response);
};
