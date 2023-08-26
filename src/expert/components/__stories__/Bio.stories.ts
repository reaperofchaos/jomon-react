import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../../__fixtures__/expert.fixtures";
import Bio from "../Bio";

const meta: Meta<typeof Bio> = {
  component: Bio,
  title: "Expert/Bio",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: expert.description,
  },
};
