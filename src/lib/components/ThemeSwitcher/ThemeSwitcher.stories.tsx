import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import ThemeSwitcher from '.';

const Wrapper = styled.div`
  display: flex;
`;

const Template: StoryFn<typeof ThemeSwitcher> = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <Wrapper>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </Wrapper>
  );
};

export default {
  title: 'Atoms/ThemeSwitcher',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
