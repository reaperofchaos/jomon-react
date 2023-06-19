import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../../__fixtures__/expert.fixtures";
import ProjectItem from "../ProjectItem";

const meta: Meta<typeof ProjectItem> = {
  component: ProjectItem,
  title: "Expert/ProjectItem",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: expert.projects![0],
  },
};
