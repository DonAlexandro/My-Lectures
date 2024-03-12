import type { Meta, StoryObj } from "@storybook/react";
import { Colors } from "./Colors";

const meta: Meta<typeof Colors> = {
  component: Colors,
  title: "Atoms/Colors",
};

type Story = StoryObj<typeof Colors>;

export default meta;

export const Default: Story = {
  args: {},
};
