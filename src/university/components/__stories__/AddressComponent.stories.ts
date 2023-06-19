import type { Meta, StoryObj } from "@storybook/react";
import { universityFixture } from "../../__fixtures__";
import AddressComponent from "../AddressComponent";

const meta: Meta<typeof AddressComponent> = {
  component: AddressComponent,
  title: "University/AddressComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    area: universityFixture.area,
  },
};
