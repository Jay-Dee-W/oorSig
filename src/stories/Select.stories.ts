import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@oorsig/atoms/Select';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: { control: { type: 'object' } },
    value: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    onChange: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    placeholder: 'Weekly',
  },
};

export const Monthly: Story = {
  args: {
    options,
    placeholder: 'Monthly',
  },
};
