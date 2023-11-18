import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * This the global description of the component
 */
const meta: Meta<typeof Button> = {
  component: Button, // Component that we're creating story for
  tags: ['autodocs'], // The most common and useful tag is autodocs - a tag for documentation autogeneration
  decorators: [(Story) => <Story />], // An array where we can decorate a story. For example add a wrapper for document body
  // Here we can specify types for component's props if they were incorrectly detected by Storybook or we want for example
  // change the controller of prop
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
  },
  // Here we can specify different story parameters, like adding a link to Figma design
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/G6AI3rPezguMuCC4UCJihs/Material-Design-3-(Dev-Mode)?node-id=53923%3A27460',
    },
  },
};

type Story = StoryObj<typeof Button>;

/**
 * This is the description of one specific story
 */
export const Filled: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
  },
};

export const FilledDisabled: Story = {
  args: {
    ...Filled.args,
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    ...Filled.args,
    variant: 'outlined',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    ...Filled.args,
    disabled: true,
    variant: 'outlined',
  },
};

export default meta;
