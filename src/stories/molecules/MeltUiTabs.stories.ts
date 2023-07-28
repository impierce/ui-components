import type { Meta, StoryObj } from '@storybook/svelte';

import MeltUiTabs from '$lib/melt-ui/Tabs.svelte';

const meta = {
  title: 'Molecules/Melt UI Tabs',
  component: MeltUiTabs,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<MeltUiTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
