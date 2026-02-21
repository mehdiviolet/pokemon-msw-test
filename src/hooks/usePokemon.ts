import { useCallback, useEffect, useState } from "react";
import { getPokemonDetail } from "../services/pokemonService";
import type { PokemonDetail } from "../types/Pokemon";

export default function usePokemon(id: string | undefined) {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getPokemonDetail(id);
        setPokemon(data);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const updateHp = useCallback((newHp: number) => {
    setPokemon((prev) => (prev ? { ...prev, health_points: newHp } : null));
  }, []);

  return { pokemon, loading, error, updateHp };
}
