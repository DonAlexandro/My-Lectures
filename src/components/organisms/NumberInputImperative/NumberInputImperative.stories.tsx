import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInputImperative";

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Organisms/Number Input",
};

type Story = StoryObj<typeof NumberInput>;

export default meta;

export const Default: Story = {
  args: {},
};
