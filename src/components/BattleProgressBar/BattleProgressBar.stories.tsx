import { BattleProgressBar } from "./BattleProgressBar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Atoms/BattleProgressBar",
  component: BattleProgressBar,
  args: {
    isVisible: true,
    progress: 50,
  },
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "valore tra 1 al 100",
    },
    isVisible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BattleProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const Progress0: Story = {
//   args: { progress: 65 },
// };

// export const Progress25: Story = {
//   args: { progress: 25 },
// };

// export const Progress75: Story = {
//   args: { progress: 75 },
// };

// export const Progress100: Story = {
//   args: { progress: 100 },
// };
export const Default: Story = {};
