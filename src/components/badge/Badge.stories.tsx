import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  //   decorators: [
  //     (Story) => (
  //       <div style={{ width: "340px" }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],

  args: {
    icone: "/assets",
    badgeTxt: "hi",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
