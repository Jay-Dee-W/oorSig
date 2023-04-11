import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '@atoms/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['success', 'info', 'danger'],
      control: { type: 'radio' },
    },
    message: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'success',
    message: 'Some helpful text to alert the user',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    message: 'Some helpful text to alert the user',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'Some helpful text to alert the user',
  },
};
