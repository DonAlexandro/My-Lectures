import { TextField } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Components/Text Field",
};

type Story = StoryObj<typeof TextField>;

export default meta;

export const Default: Story = {
  args: {},
};
