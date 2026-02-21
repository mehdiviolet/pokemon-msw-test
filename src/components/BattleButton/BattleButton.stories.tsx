import type { Meta, StoryObj } from "@storybook/react-vite";
import BattleButton from "./BattleButton";

const meta = {
  title: "Molecules/BattleButton",
  component: BattleButton,
  args: {
    disabled: false,
    children: "simula combattimento",
    onClick: undefined,
  },
} satisfies Meta<typeof BattleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {};
export const Combatta: Story = {
  args: {
    children: "sta combattendo...",
    disabled: true,
  },
};
