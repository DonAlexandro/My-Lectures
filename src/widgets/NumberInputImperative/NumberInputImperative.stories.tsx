import type { Meta, StoryObj } from "@storybook/react";
import { NumberInputImperative } from "./NumberInputImperative";

const meta: Meta<typeof NumberInputImperative> = {
  component: NumberInputImperative,
  title: "Widgets/Number Input",
};

type Story = StoryObj<typeof NumberInputImperative>;

export default meta;

export const Default: Story = {
  args: {},
};
