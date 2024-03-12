import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Molecules/Button",
};

type Story = StoryObj<typeof Button>;

export default meta;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "contained",
  },
};
