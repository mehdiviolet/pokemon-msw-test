import type { Meta, StoryObj } from "@storybook/react-vite";
import PokemonCard from "./PokemonCard";

const meta = {
  title: "Organism/Poke",
  component: PokemonCard,
  //   decorators: [
  //     (Story) => (
  //       <div style={{ width: "340px" }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],
  args: {
    title: "Psy...",
    description:
      "...desc...desc...desc...desc......desc...desc...desc...desc......desc...desc...desc...desc......desc...desc...desc...desc......desc...desc...desc...desc...",
  },
} satisfies Meta<typeof PokemonCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Warning: Story = {
  args: {
    stateCard: "warning",
  },
};

export const Dead: Story = {
  args: {
    stateCard: "dead",
  },
};
