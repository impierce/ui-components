import type { Meta, StoryObj } from '@storybook/svelte';

import ProgressBar from '$lib/atoms/ProgressBar.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Atoms/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 10 }
    }
  }
} satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    value: 30
    // emphasis: 'medium',
    // type: 'accept',
    // label: 'Confirm'
  }
};
