import type { Meta, StoryObj } from '@storybook/svelte';

import MeltUiConnectionTabs from '$lib/melt-ui/tabs/ConnectionTabs.svelte';

const meta = {
  title: 'Molecules/Connection Tabs (Melt UI)',
  component: MeltUiConnectionTabs,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<MeltUiConnectionTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
