import type { Meta, StoryObj } from "@storybook/react-vite";
import CardStat from "./CardStat";

const meta = {
  title: "Atoms/CardStat",
  component: CardStat,
  //   decorators: [
  //     (Story) => (
  //       <div style={{ width: "340px" }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],
  args: {
    label: "LV",
    value: 20,
  },
} satisfies Meta<typeof CardStat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Warning: Story = {
  args: {
    label: "PS",
    value: 5,
    state: "warning",
  },
};

export const Dead: Story = {
  args: {
    label: "PS",
    value: 0,
    state: "dead",
  },
};
