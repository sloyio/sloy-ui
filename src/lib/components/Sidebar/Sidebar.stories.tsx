import { StoryFn } from '@storybook/react';
import { SidebarContent, SidebarProps } from '.';
import { CardDemo } from '../Card/Card.stories';

export default {
  title: 'Atoms/Sidebar',
  component: SidebarContent,
};

const Template: StoryFn<typeof SidebarContent> = (args: SidebarProps) => {
  return (
    <SidebarContent {...args}>
      <CardDemo />
    </SidebarContent>
  );
};

export const Default = Template.bind({});
Default.args = {};
