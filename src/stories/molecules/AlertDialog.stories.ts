import type { Meta, StoryObj } from '@storybook/svelte';

import AlertDialog from '$lib/molecules/AlertDialog.svelte';

const meta = {
  title: 'Molecules/Alert Dialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
