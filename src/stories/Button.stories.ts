import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: { action: 'Button-Clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    variant: 'light',
    size: 'sm',
    children: 'Small',
  },
};
