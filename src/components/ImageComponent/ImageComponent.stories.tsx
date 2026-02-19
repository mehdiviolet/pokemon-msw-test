import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageComponent from "./ImageComponent";

const meta = {
  title: "Atoms/imagecomponent",
  component: ImageComponent,
  args: {
    // iconSkull,
    states: "default",
    imgName: "img",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
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
export const Dead: Story = {
  args: { states: "dead" },
};
