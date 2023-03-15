import type { Meta, StoryObj } from '@storybook/svelte';
import Avatar from '$lib/atoms/Avatar.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: { type: 'text' } },
    initials: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    }
    // emphasis: {
    //   control: { type: 'select' },
    //   options: ['low', 'medium', 'high']
    // },
    // // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large']
    // },
    // type: {
    //   control: { type: 'select' },
    //   options: ['accept', 'cancel']
    // }
  }
} satisfies Meta<Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Empty: Story = {
  args: {
    // emphasis: 'medium',
    // type: 'accept',
    // label: 'Confirm'
  }
};

export const Initials: Story = {
  args: {
    initials: 'AB'
  }
};
