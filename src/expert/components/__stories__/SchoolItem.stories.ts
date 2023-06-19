import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../../__fixtures__/expert.fixtures";
import SchoolItem from "../SchoolItem";

const meta: Meta<typeof SchoolItem> = {
  component: SchoolItem,
  title: "Expert/SchoolItem",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    school: expert.education[0],
  },
};
