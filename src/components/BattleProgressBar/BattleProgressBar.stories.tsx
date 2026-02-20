import type { Meta, StoryObj } from "@storybook/react-vite";
import BattleProgressBar from "./BattleProgressBar";

const meta = {
  title: "Molecules/BattleProgressBar",
  component: BattleProgressBar,
  args: {
    progress: 50,
  },
  argTypes: {
    progress: {
      control: "range",
    },
  },
} satisfies Meta<typeof BattleProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Progress: Story = {
  args: {
    progress: 80,
  },
};
