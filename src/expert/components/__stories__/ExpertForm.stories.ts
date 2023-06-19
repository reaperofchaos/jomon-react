import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../../__fixtures__/expert.fixtures";
import ExpertForm from "../ExpertForm";

const meta: Meta<typeof ExpertForm> = {
  component: ExpertForm,
  title: "Expert/ExpertForm",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expert: expert,
  },
};
