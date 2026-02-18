import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageComponent from "./ImageComponent";

const meta = {
  title: "Atoms/ImageComponent",
  component: ImageComponent,
  args: {
    name: "Psyduck",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    skullIconUrl: "/assets/icons/skull.svg",
    status: "default",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["default", "isWarning", "isDefeated"],
    },
    name: {
      control: "text",
    },
    imageUrl: {
      control: "text",
    },
    skullIconUrl: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "340px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Defeated: Story = {
  args: { status: "isDefeated" },
};
