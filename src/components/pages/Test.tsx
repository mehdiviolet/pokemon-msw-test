import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardHeading } from "../CardHeading/CardHeading";
import { getPokemonDetail } from "../../services/pokemonService";
import type { PokemonDetail } from "../../types/Pokemon";
import CardStats from "../CardStats/CardStats";
import ImageComponent from "../ImageComponent/ImageComponent";

export default function Test() {
  const { id } = useParams<{ id: string }>();

  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(id);
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
  if (!pokemon) return;
  return (
    <div>
      Test: {id}
      card number : {pokemon.level}
      <hr />
      <CardHeading
        name={pokemon?.name}
        cardNumber={pokemon.card_number}
        key={pokemon.id}
        status="default"
        iconUrl={pokemon.typology.icon_url}
      />
      <ImageComponent
        name={pokemon.name}
        imageUrl="/assets/images/ps.png"
        status="default"
        skullIconUrl="/assets/icons/skull.svg"
      />
      <CardStats
        lvValue={pokemon.level}
        psValue={pokemon.health_points}
        status="default"
        vulValue={pokemon.vulnerability.value}
      />
    </div>
  );
}
