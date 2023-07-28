import type { Meta, StoryObj } from '@storybook/svelte';

import ActivityTabs from '$lib/molecules/ActivityTabs.svelte';

const meta = {
  title: 'Molecules/Activity Tabs',
  component: ActivityTabs,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<ActivityTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
