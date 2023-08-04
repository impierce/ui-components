import type { Meta, StoryObj } from '@storybook/svelte';

import MeltUiActivityTabs from '$lib/melt-ui/tabs/ActivityTabs.svelte';

const meta = {
  title: 'Molecules/Activity Tabs (Melt UI)',
  component: MeltUiActivityTabs,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: { type: 'select' },
      options: ['connections', 'history'],
    }
  }
} satisfies Meta<MeltUiActivityTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
