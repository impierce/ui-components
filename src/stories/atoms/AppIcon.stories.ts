import type { Meta, StoryObj } from '@storybook/svelte';

import AppIcon from '$lib/atoms/AppIcon.svelte';

const meta = {
  title: 'Atoms/AppIcon',
  component: AppIcon
} satisfies Meta<AppIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
