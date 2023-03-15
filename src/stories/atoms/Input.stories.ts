import type { Meta, StoryObj } from '@storybook/svelte';

import Input from '$lib/atoms/Input.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    // emphasis: {
    //   control: { type: 'select' },
    //   options: ['low', 'medium', 'high']
    // },
    // // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large']
    // },
    // type: {
    //   control: { type: 'select' },
    //   options: ['accept', 'cancel']
    // }
  }
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    // emphasis: 'medium',
    // type: 'accept',
    // label: 'Confirm'
  }
};
