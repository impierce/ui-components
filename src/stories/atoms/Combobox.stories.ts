import type { Meta, StoryObj } from '@storybook/svelte';

import Combobox from '$lib/melt-ui/Combobox.svelte';

const meta = {
  title: 'Melt UI/Combobox',
  component: Combobox
} satisfies Meta<Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
