import { useEffect, useState } from "react";
import { getPokemonList } from "../services/pokemonService";
import type { PokemonListItem } from "../types/Pokemon";

export default function usePokemonList() {
  const [items, setItems] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonList();
        setItems(data);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { loading, error, items };
}
