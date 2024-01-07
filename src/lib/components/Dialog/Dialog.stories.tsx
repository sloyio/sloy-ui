import { StoryFn } from '@storybook/react';
import { Dialog, DialogProps } from '.';

export default {
  title: 'Atoms/Dialog',
  component: Dialog,
};

const Template: StoryFn<typeof Dialog> = (args: DialogProps) => {
  return <Dialog {...args}>123123</Dialog>;
};

export const Default = Template.bind({});
Default.args = {};
