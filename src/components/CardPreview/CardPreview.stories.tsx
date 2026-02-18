import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPreview } from "./CardPreview";
import { mockItems } from "../../mocks/data";

const meta = {
  title: "Molecules/CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...mockItems[0],
  },
};
