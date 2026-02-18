import type { Meta, StoryObj } from "@storybook/react-vite";
import { mockItemDetails } from "../../mocks/data";
import PokemonCard from "./PokemonCard";

// Mock pokemon data
// const mockItemDetails[0]: PokemonDetail = {
//   id: 54,
//   name: "Psyduck",
//   card_number: 54,
//   level: 15,
//   health_points: 100,
//   image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
//   typology: {
//     name: "Acqua",
//     icon_url: "/assets/icons/water.svg",
//   },
//   vulnerability: {
//     name: "Elettro",
//     value: 20,
//   },
// };

const meta = {
  title: "Molecules/PokemonCard",
  component: PokemonCard,
  args: {
    pokemon: mockItemDetails[0],
    status: "default",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["default", "isWarning", "isDefeated"],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Warning: Story = {
  args: {
    status: "isWarning",
    pokemon: {
      ...mockItemDetails[0],
      health_points: 10,
    },
  },
};

export const Defeated: Story = {
  args: {
    status: "isDefeated",
    pokemon: {
      ...mockItemDetails[0],
      health_points: 0,
    },
  },
};

export const HighLevel: Story = {
  args: {
    pokemon: {
      ...mockItemDetails[0],
      level: 50,
      health_points: 200,
    },
  },
};

export const BattleError: Story = {
  args: {
    battleError: "errore...",
  },
};
