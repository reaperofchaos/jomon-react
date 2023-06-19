import ExpertComponent from "../Expert";
import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../__fixtures__/expert.fixtures";

const meta: Meta<typeof ExpertComponent> = {
  component: ExpertComponent,
  title: "Expert/ExpertComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expert: expert,
  },
};
