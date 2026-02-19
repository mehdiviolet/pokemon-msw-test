import type { Meta, StoryObj } from "@storybook/react-vite";
import CardStats from "./CardStats";

const meta = {
  title: "Molecules/CardStats",
  component: CardStats,
  //   decorators: [
  //     (Story) => (
  //       <div style={{ width: "340px" }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],
  args: {
    status: "default",
    lvValue: 15,
    psValue: 100,
    hpValue: 20,
  },
} satisfies Meta<typeof CardStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Warning: Story = {
  args: {
    status: "warning",
  },
};

export const Dead: Story = {
  args: {
    status: "dead",
  },
};
