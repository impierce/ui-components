import type { Meta, StoryObj } from '@storybook/svelte';

import BottomNavBar from '$lib/molecules/navigation/BottomNavBar.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Molecules/Bottom Navigation',
  component: BottomNavBar,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: { type: 'select' },
      options: ['me', 'scan', 'activity']
    }
  }
} satisfies Meta<BottomNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    // title: 'Graduate diploma',
    // description: 'University of Oxford'
  }
};
