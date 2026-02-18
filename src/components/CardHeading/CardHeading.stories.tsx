import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardHeading } from "./CardHeading";

const meta = {
  title: "Molecules/CardHeading",
  component: CardHeading,
  args: {
    name: "Acqua",
    cardNumber: "54",
    iconUrl: "/assets/icons/water_drop.svg",
    status: "default",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "340px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "isWarning", "isDefeated"],
    },
    name: {
      control: "text",
    },
    cardNumber: {
      control: { type: "number" },
    },
    iconUrl: {
      control: "radio",
      options: ["", "/assets/icons/water_drop.svg"],
    },
  },
} satisfies Meta<typeof CardHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: "58",
  },
};

export const Warning: Story = {
  args: { status: "isWarning" },
};

export const Defeated: Story = {
  args: { status: "isDefeated" },
};
