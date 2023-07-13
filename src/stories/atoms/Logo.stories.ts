import type { Meta, StoryObj } from '@storybook/svelte';

import Logo from '$lib/atoms/Logo.svelte';

const meta = {
  title: 'Atoms/Logo',
  component: Logo
} satisfies Meta<Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
