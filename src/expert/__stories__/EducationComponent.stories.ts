import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../__fixtures__/expert.fixtures";
import EducationComponent from "../EducationComponent";

const meta: Meta<typeof EducationComponent> = {
  component: EducationComponent,
  title: "Expert/EducationComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    education: expert.education,
  },
};
