import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@atoms/Button';
import { GitHub } from '@icons/index';

type IconProps = {
  icon: React.ReactNode;
};
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
// type Story = StoryObj<typeof Button , IconProps>;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'primary',
    variant: 'primary',
    size: 'md',
    // icon: <GitHub />,
  },
};

// export const Default: Story = (args) => <Button {...args} />;
// Default.args = {
//   children: 'primary',
//   variant: 'primary',
//   size: 'md',
//   icon: <GitHub />,
// };
export const Secondary: Story = {
  args: {
    children: 'secondary',
    variant: 'secondary',
    size: 'md',
  },
};
