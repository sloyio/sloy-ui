import { StoryFn } from '@storybook/react';
import { AnimatedLogo, Props } from './AnimatedLogo';

export default {
  title: 'Atoms/AnimatedLogo',
  component: AnimatedLogo,
};

const Template: StoryFn<typeof AnimatedLogo> = (args: Props) => (
  <AnimatedLogo {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Shadowed = Template.bind({});
Shadowed.args = {
  shadowed: true,
};

export const Small = Template.bind({});
Small.args = {
  radius: '60px',
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
