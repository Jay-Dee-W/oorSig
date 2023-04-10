import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@atoms/Button';
import { GitHub } from '@icons/index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
     backgroundColor: {
      control: { type: 'color' } ,
    },
    onClick: { action: 'Button-Clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children:'primary',
  },
};
