import type { Meta, StoryObj } from '@storybook/svelte';

import Dialog from '$lib/molecules/Dialog.svelte';

const meta = {
  title: 'Molecules/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
