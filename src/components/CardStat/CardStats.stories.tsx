import type { Meta, StoryObj } from "@storybook/react-vite";
import CardStat from "./CardStat";

const meta = {
  title: "Atoms/CardStat",
  component: CardStat,
  args: {
    label: "PS",
    value: 100,
    status: "default",
  },
  argTypes: {
    label: {
      control: "select",
      options: ["LV", "VUL", "PS"],
    },
    value: {
      control: { type: "number", min: 0, max: 200 },
    },
    status: {
      control: "select",
      options: ["default", "isWarning", "isDefeated"],
    },
  },
} satisfies Meta<typeof CardStat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LV: Story = {
  args: { label: "LV", value: 15 },
};

export const VUL: Story = {
  args: { label: "VUL", value: 20 },
};

export const PSNormal: Story = {
  args: { label: "PS", value: 100, status: "default" },
};

export const PSWarning: Story = {
  args: { label: "PS", value: 10, status: "isWarning" },
};

export const PSDefeated: Story = {
  args: { label: "PS", value: 0, status: "isDefeated" },
};
