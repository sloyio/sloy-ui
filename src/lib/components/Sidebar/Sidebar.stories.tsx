import { StoryFn } from '@storybook/react';
import { SidebarContent, SidebarProps } from '.';

export default {
  title: 'Atoms/Sidebar',
  component: SidebarContent,
};

const Template: StoryFn<typeof SidebarContent> = (args: SidebarProps) => {
  return <SidebarContent {...args}>123123</SidebarContent>;
};

export const Default = Template.bind({});
Default.args = {};
