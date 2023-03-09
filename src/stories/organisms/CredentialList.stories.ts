import type { Meta, StoryObj } from '@storybook/svelte';

import CredentialList from '$lib/organisms/CredentialList.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Organisms/Credentials/List',
  component: CredentialList,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<CredentialList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    // title: 'Graduate diploma',
    // description: 'University of Oxford'
  }
};
