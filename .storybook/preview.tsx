import type { Preview } from "@storybook/react-vite";

import "../src/styles/main.scss";
import { MemoryRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default preview;
