import type { Meta, StoryObj } from '@storybook/svelte';

import TopNavigation from '$lib/molecules/TopNavigation.svelte';

const meta = {
  title: 'Molecules/Top Navigation',
  component: TopNavigation,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<TopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title'
  }
};
