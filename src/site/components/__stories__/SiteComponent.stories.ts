import type { Meta, StoryObj } from "@storybook/react";
import { siteFixture } from "../../__fixtures__/site.fixtures";
import SiteComponent from "../SiteComponent";

const meta: Meta<typeof SiteComponent> = {
  component: SiteComponent,
  title: "Site/SiteComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    site: siteFixture,
  },
};
