import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@atoms/Button';
import { GitHub } from '@icons/index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [ 'primary' , 'secondary' , 'success' , 'danger' , 'light'],
      control: { type: 'radio' },
    },
    size: {
      options: [ 'xs' , 'sm' , 'md' , 'lg' , 'xl'],
      control: { type: 'radio' },
    },
    onClick: { action: 'Button-Clicked' },
    disabled: { control: { type: 'boolean' } }, 
    loading: { control: { type: 'boolean' } }, 
    children:{ control :{type:'text'}},
    icon:{control:{type:'object'}},
    title:{control:{type:'text'}},
    type: {
      options: [ 'button' , 'submit' , 'reset'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    size: 'md',
    icon: <GitHub />,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    size: 'md',
    icon: <GitHub />,
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
    size: 'md',
    icon: <GitHub />,
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
    size: 'md',
    icon: <GitHub />,
  },
};

export const Light: Story = {
  args: {
    children: 'Light',
    variant: 'light',
    size: 'md',
    icon: <GitHub />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    size: 'md',
    icon: <GitHub />,
    disabled: true
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    size: 'md',
    icon: <GitHub />,
    loading: true
  },
};

export const NoIcon: Story = {
  args: {
    children: 'NoIcon',
    size: 'md', 
  },
};

export const NoRadius: Story = {
  args: {
    children: 'No Radius',
    size: 'md',
    icon: <GitHub />,
    borderRadius:'none'
  },
};
