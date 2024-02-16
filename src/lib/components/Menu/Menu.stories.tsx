import { StoryFn } from '@storybook/react';
import styled from 'styled-components';
import Menu from '.';
import MenuGroup from './components/MenuGroup';
import MenuItem from './components/MenuItem';

const Wrapper = styled.div`
  display: flex;
`;

const Template: StoryFn = () => {
  return (
    <Wrapper>
      <Menu>
        <MenuGroup label="Россия">
          <MenuItem>Екатеринбург</MenuItem>
          <MenuItem>Челябинск</MenuItem>
        </MenuGroup>
      </Menu>
    </Wrapper>
  );
};

export default {
  title: 'Atoms/Menu',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
