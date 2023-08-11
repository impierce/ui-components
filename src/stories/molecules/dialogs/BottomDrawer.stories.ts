import type { Meta, StoryObj } from '@storybook/svelte';

import BottomDrawer from '$lib/molecules/dialogs/BottomDrawer.svelte';

const meta = {
  title: 'Molecules/Dialogs/Bottom Drawer',
  component: BottomDrawer,
  tags: ['autodocs'],
  argTypes: {
    titleText: {
      control: 'text'
    },
    descriptionText: {
      control: 'text'
    },
  }
} satisfies Meta<BottomDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: 'Title',
    descriptionText: 'This is a description'
  }
};
