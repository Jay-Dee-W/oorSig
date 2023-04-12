import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@atoms/index';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    active: { control: { type: 'boolean' } },
    borderColor: { control: { type: 'color' } },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    active: true,
    borderColor: 'black',
  },
};
