import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@oorsig/atoms/Dropdown';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: { control: { type: 'object' } },
    defaultValue: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    onChange: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

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
