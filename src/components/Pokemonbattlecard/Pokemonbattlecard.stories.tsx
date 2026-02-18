import type { Meta, StoryObj } from "@storybook/react-vite";
import { mockItemDetails } from "../../mocks/data";
import { fn } from "storybook/test";
import PokemonBattleCard from "./Pokemonbattlecard";

const meta = {
  title: "Organisms/PokemonBattleCard",
  component: PokemonBattleCard,
  args: {
    pokemon: mockItemDetails[0],
    battleStatus: "idle",
    progress: 0,
    onBattleClick: fn(),
  },
  argTypes: {
    battleStatus: {
      control: "select",
      options: ["idle", "queued", "running", "done", "failed"],
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
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
} satisfies Meta<typeof PokemonBattleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};

export const BattleQueued: Story = {
  args: {
    battleStatus: "queued",
    progress: 0,
  },
};

export const BattleRunning: Story = {
  args: {
    battleStatus: "running",
    progress: 45,
  },
};

export const BattleDone: Story = {
  args: {
    battleStatus: "done",
    progress: 100,
    pokemon: {
      ...mockItemDetails[0],
      health_points: 75,
    },
  },
};

export const BattleDefeat: Story = {
  args: {
    battleStatus: "done",
    progress: 100,
    pokemon: {
      ...mockItemDetails[0],
      health_points: 0,
    },
  },
};

export const BattleFailed: Story = {
  args: {
    battleStatus: "failed",
    progress: 50,
  },
};

export const WarningHP: Story = {
  args: {
    battleStatus: "idle",
    pokemon: {
      ...mockItemDetails[0],
      health_points: 15,
    },
  },
};
