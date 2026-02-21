import { useEffect, useState } from "react";
// import { getPokemonList } from "../../services/pokemonService";
// import { type PokemonListItem } from "../../types/Pokemon";
import { CardPreview } from "../../components/CardPreview/CardPreview";
// import { Loader } from "../../components/Loader/Loader";
// import "./ListPage.scss";
import type { PokemonListItem } from "../../types/Pokemon";
import { getPokemonList } from "../../services/pokemonService";
import usePokemonList from "../hooks/usePokemonList";
// import type { PokemonListItem } from "../Types/Pokemon";

export const ListPage = () => {
  const { items, error, loading } = usePokemonList();
  return (
    <div className="list-page">
      {/* 1. HERO (Sempre visibile, anche con errore) */}
      <section className="list-page__hero">
        <h2 className="list-page__title">Il tuo Poké Deck</h2>
        <p className="list-page__text">
          Dai un'occhiata al più grande e completo database di carte Pokémon!
          Troverai carte di ogni espansione e tante curiosità sulle tue
          collezioni. Clicca sui tuoi Pokémon per scoprire di più su di loro!
        </p>
      </section>

      {/* 2. CONTENUTO VARIABILE (Loader, Errore o Griglia) */}
      {loading ? (
        // <Loader />
        <p>loader...</p>
      ) : error || items.length === 0 ? (
        <div className="list-page__no-results">
          Non sono stati trovati risultati per questa pagina ti invitiamo a
          riprovare
        </div>
      ) : (
        // GRIGLIA NORMALE
        <section className="list-page__grid">
          {items.map((item) => (
            <CardPreview key={item.id} {...item} />
          ))}
        </section>
      )}
    </div>
  );
};
