import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../__fixtures__/expert.fixtures";
import NameComponent from "../Name";

const meta: Meta<typeof NameComponent> = {
  component: NameComponent,
  title: "Expert/NameComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: expert.name,
  },
};
