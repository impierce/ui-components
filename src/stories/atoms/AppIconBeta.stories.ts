import type { Meta, StoryObj } from '@storybook/svelte';

import AppIconBeta from '$lib/atoms/app-icon/AppIconBeta.svelte';

const meta = {
  title: 'Atoms/AppIconBeta',
  component: AppIconBeta
} satisfies Meta<AppIconBeta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
