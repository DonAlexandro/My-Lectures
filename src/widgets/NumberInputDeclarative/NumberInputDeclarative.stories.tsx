import type { Meta, StoryObj } from "@storybook/react";
import { NumberInputDeclarative } from "./NumberInputDeclarative";

const meta: Meta<typeof NumberInputDeclarative> = {
  component: NumberInputDeclarative,
  title: "Widgets/Number Input Declarative",
};

type Story = StoryObj<typeof NumberInputDeclarative>;

export default meta;

export const Default: Story = {
  args: {},
};
