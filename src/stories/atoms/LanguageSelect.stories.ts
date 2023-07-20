import type { Meta, StoryObj } from '@storybook/svelte';

import LanguageSelect from '$lib/atoms/LanguageSelect.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Atoms/Language Select',
  component: LanguageSelect,
  tags: ['autodocs'],
  argTypes: {
    selected: undefined
  }
} satisfies Meta<LanguageSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    // value: 30
    // emphasis: 'medium',
    // type: 'accept',
    // label: 'Confirm'
  }
};
