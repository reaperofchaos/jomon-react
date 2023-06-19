import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../__fixtures__/expert.fixtures";
import Publications from "../Publications";

const meta: Meta<typeof Publications> = {
  component: Publications,
  title: "Expert/Publications",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    works: expert.publications,
  },
};
