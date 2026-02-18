import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonDetail } from "../../../services/pokemonService";
import type { PokemonDetail } from "../../../types/Pokemon";
import { useBattle } from "../../../hooks/useBattle";
import PokemonBattleCard from "../../Pokemonbattlecard/Pokemonbattlecard";
import "./Pokemondetailpage.scss";
export default function Pokemondetailpage() {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    startBattle,
    status: battleStatus,
    progress,
    battleResultHp,
    error: battleError,
  } = useBattle();

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

  useEffect(() => {
    if (battleStatus === "done" && battleResultHp !== null) {
      setPokemon((prev) =>
        prev ? { ...prev, health_points: battleResultHp } : null,
      );
    }
  }, [battleStatus, battleResultHp]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading pokemon</div>;
  if (!pokemon) return null;

  const handleBattleClick = () => {
    if (id) {
      startBattle(id);
    }
  };

  return (
    <div className="detail-page">
      {/* 1. HERO BANNER SFONDO */}
      <div
        className="detail-page__banner"
        style={{
          backgroundImage: `url('${pokemon.image_url}')`,
        }}
      ></div>
      {/* 2. MAIN CARD FLOTTANTE */}
      <main className="detail-page__main-card">
        {/* COLONNA SINISTRA: TESTI */}
        <div className="detail-page__left">
          <Link to="/items" className="detail-page__back-btn">
            ←
          </Link>

          <h1 className="detail-page__title">
            {pokemon.name} <span>| {pokemon.subtitle}</span>
          </h1>

          <div
            className="detail-page__description"
            dangerouslySetInnerHTML={{ __html: pokemon.long_description }}
          />
        </div>
        {/* COLONNA DESTRA: INTERATTIVO */}
        <PokemonBattleCard
          pokemon={pokemon}
          battleStatus={battleStatus}
          progress={progress}
          onBattleClick={handleBattleClick}
          battleError={battleError}
        />
      </main>
      {/* 3. SEZIONE EXTRA DETAILS (Immagine unica dal mock) */}
      <section className="detail-page__extra">
        <img
          src={pokemon.extra_details}
          alt="Dettagli Extra"
          className="detail-page__extra-img"
        />
      </section>
    </div>
  );
}
