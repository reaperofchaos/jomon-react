import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../../__fixtures__/expert.fixtures";
import PersonalWebsites from "../PersonalWebsites";

const meta: Meta<typeof PersonalWebsites> = {
  component: PersonalWebsites,
  title: "Expert/PersonalWebsites",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    websites: expert.personalWebsites,
  },
};
