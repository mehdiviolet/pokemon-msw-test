import type { Meta, StoryObj } from "@storybook/react-vite";
import CardStats from "./CardStats";

const meta = {
  title: "Molecules/CardStats",
  component: CardStats,
  args: {
    lvValue: 15,
    vulValue: 20,
    psValue: 100,
    status: "default",
  },
  argTypes: {
    lvValue: {
      control: { type: "number", min: 0, max: 100 },
    },
    vulValue: {
      control: { type: "number", min: 0, max: 100 },
    },
    psValue: {
      control: { type: "number", min: 0, max: 200 },
    },
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
} satisfies Meta<typeof CardStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Warning: Story = {
  args: { status: "isWarning", psValue: 10 },
};

export const Defeated: Story = {
  args: { status: "isDefeated", psValue: 0 },
};
