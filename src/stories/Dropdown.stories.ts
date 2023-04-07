
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@oorsig/atoms/Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args : {
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ],
        placeholder: 'Weekly',
        onChange: (value) => console.log(`Selected option: ${value}`),
    }
};