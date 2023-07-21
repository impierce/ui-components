import type { Meta, StoryObj } from '@storybook/svelte';

import PinInput from '$lib/melt-ui/PinInput.svelte';

const meta = {
  title: 'Melt UI/Pin Input',
  component: PinInput,
} satisfies Meta<PinInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
