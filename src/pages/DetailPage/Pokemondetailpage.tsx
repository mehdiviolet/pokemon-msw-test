import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Pokemondetailpage.scss";
import usePokemon from "../../hooks/usePokemon";
import { useBattle } from "../../hooks/useBattle";
import PokemonBattleCard from "../../components/Pokemonbattlecard/Pokemonbattlecard copy";

export default function Pokemondetailpage() {
  const { id } = useParams<{ id: string }>();

  const { pokemon, error, loading, updateHp } = usePokemon(id);
  const { startBattle, status, progress, battleResultHp } = useBattle();

  useEffect(() => {
    if (status === "done" && battleResultHp !== null) {
      updateHp(battleResultHp);
    }
  }, [status, battleResultHp, updateHp]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading pokemon</div>;
  if (!pokemon) return null;

  return (
    <div className="detail-page">
      <div
        className="detail-page__banner"
        style={{
          backgroundImage: `url('${pokemon.image_url}')`,
        }}
      ></div>
      <main className="detail-page__main-card">
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
        <PokemonBattleCard
          pokemon={pokemon}
          battleStatus={status}
          progress={progress}
          onBattleClick={() => {
            if (id) startBattle(id);
          }}
        />
      </main>
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
