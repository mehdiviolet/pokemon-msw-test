import { fn } from "storybook/test";
import BattleButton from "./BattleButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Atoms/BattleButton",
  component: BattleButton,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    children: "Simula combattimento",
    disabled: false,
  },
  argTypes: {
    children: {
      control: "radio",
      options: [
        "Simula combattimento",
        "Sta combattendo...",
        "Hai vinto...Continua ancora!",
        "HAI PERSO, RIPROVA!",
        "SIMULA NUOVAMENTE",
      ],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BattleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
