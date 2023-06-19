import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../__fixtures__/expert.fixtures";
import Projects from "../Projects";

const meta: Meta<typeof Projects> = {
  component: Projects,
  title: "Expert/Projects",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projects: expert.projects,
  },
};
