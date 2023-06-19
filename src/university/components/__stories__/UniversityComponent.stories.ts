import type { Meta, StoryObj } from "@storybook/react";
import UniversityComponent from "../UniversityComponent";
import { universityFixture } from "../../__fixtures__";

const meta: Meta<typeof UniversityComponent> = {
  component: UniversityComponent,
  title: "University/UniversityComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    university: universityFixture,
  },
};
