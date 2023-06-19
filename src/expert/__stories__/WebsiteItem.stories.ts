import type { Meta, StoryObj } from "@storybook/react";
import { expert } from "../__fixtures__/expert.fixtures";
import WebsiteItem from "../WebsiteItem";

const meta: Meta<typeof WebsiteItem> = {
  component: WebsiteItem,
  title: "Expert/WebsiteItem",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    website: expert.personalWebsites![0],
  },
};
