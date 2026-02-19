import type { Meta, StoryObj } from "@storybook/react-vite";
import CardFooter from "./CardFooter";

const meta = {
  title: "Molecules/CardFooter",
  component: CardFooter,
  //   decorators: [
  //     (Story) => (
  //       <div style={{ width: "340px" }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],

  args: {
    icon: "/assets/icons/water_drop.svg",
    rarity: "pokemon_base",
  },
} satisfies Meta<typeof CardFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
