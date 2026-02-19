import type { Meta, StoryObj } from "@storybook/react-vite";
import CardHeading from "./CardHeading";

const meta = {
  title: "Molecules/CardHeading",
  component: CardHeading,
  args: {
    badgeTxt: "Acqua",
    badgeNum: "54",
    icone: "/assets/icons/water_drop.svg",
    stateCard: "default",
  },

  // decorators: [
  //   (Story) => (
  //     <div style={{ width: "340px" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof CardHeading>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Warning: Story = {
  args: { stateCard: "warning" },
};

export const Dead: Story = {
  args: { stateCard: "dead" },
};
