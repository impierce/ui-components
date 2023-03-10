import type { Meta, StoryObj } from '@storybook/svelte';

import ActionTemplate from '$lib/templates/ActionTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Templates/Action',
  component: ActionTemplate,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<ActionTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Login: Story = {
  name: 'Log in',
  args: {
    title: 'Log in to bestdex.com',
    description: 'bestdex.com is asking for your permission to log in'
  }
};

export const AddCredential: Story = {
  name: 'Add credential',
  args: {
    title: 'Add new credential',
    description: 'Oxford University wants to add a credential to your wallet'
  }
};
