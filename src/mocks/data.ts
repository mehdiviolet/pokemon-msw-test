import type { PokemonDetail, PokemonListItem } from "../types/Pokemon";

export const mockItems: PokemonListItem[] = [
  {
    id: "psyduck",
    name: "Psyduck",
    short_description:
      "Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.",
    image_url: "/assets/images/source1.png",
  },
  {
    id: "sprigatito",
    name: "Sprigatito",
    short_description: "Sprigatito vive per un solo scopo: essere adorato.",
    image_url: "/assets/images/source2.png",
  },
  {
    id: "snorlax",
    name: "Snorlax",
    short_description: "Il gigante pigro del Pokémon...",
    image_url: "/assets/images/source3.png",
  },
  {
    id: "fuecoco",
    name: "Fuecoco",
    short_description:
      "Coccodrillo pigro con scaglie rosse. Il suo carattere rilassato lo fa sembrare un po’ assente.",
    image_url: "/assets/images/source4.png",
  },
  {
    id: "magikarp",
    name: "Magikarp",
    short_description:
      "È universalmente noto come il Pokémon più inutile al mondo. È incapace di combattere.",
    image_url: "/assets/images/source5.png",
  },
  {
    id: "diglett",
    name: "Diglett",
    short_description:
      "Di lui emerge solo la testa tonda con il naso rosa; nessuno ha mai visto il resto del suo corpo.",
    image_url: "/assets/images/source6.jpg",
  },
];

export const mockItemDetails: PokemonDetail[] = [
  {
    id: "psyduck",
    name: "Psyduck",
    subtitle: "Il Re dello Stress 🦆💥",
    card_number: "054",
    level: 15,
    health_points: 100,
    rarity: "pokèmon_base",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.</p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda".</p><p><ol><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ol></p><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "assets/image/icon/water_drop.svg",
      icon_name: "water_drop",
    },
    energy: {
      name: "stella",
      icon_url: "https://picsum.photos/10/10",
    },
    vulnerability: {
      icon_url: "https://picsum.photos/10/10",
      value: -20,
    },
    extra_details: "https://picsum.photos/920/450",
    image_url: "source1",
  },
];
