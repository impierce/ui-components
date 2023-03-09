import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '$lib/atoms/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    emphasis: {
      control: { type: 'select' },
      options: ['low', 'medium', 'high']
    },
    // backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    type: {
      control: { type: 'select' },
      options: ['accept', 'cancel']
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Confirm: Story = {
  args: {
    emphasis: 'medium',
    type: 'accept',
    label: 'Confirm'
  }
};

export const Cancel: Story = {
  args: {
    type: 'cancel',
    label: 'Cancel'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
