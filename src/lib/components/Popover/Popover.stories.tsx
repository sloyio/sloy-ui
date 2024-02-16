import { StoryFn } from '@storybook/react';
import styled from 'styled-components';
import Popover from '.';
import { Button } from '../Button';
import { Icon, IconType } from '../Icon';
import Menu from '../Menu';
import MenuGroup from '../Menu/components/MenuGroup';
import MenuItem from '../Menu/components/MenuItem';

const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
`;
const Example = styled.div``;

const Template: StoryFn = () => {
  return (
    <Wrapper>
      <p
        style={{
          position: 'absolute',
          top: '150px',
          zIndex: -1,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        cupiditate tenetur corrupti molestias beatae. Reprehenderit temporibus,
        sit recusandae ab excepturi sunt quo esse unde quam, quas placeat,
        eveniet corporis iusto animi. Distinctio consequatur ut quaerat facere
        harum, voluptate possimus, repellat architecto vero ratione voluptas
        alias expedita quos aspernatur deleniti fugiat fugit impedit similique,
        facilis vitae aperiam molestias placeat veritatis quia! Veritatis sit
        suscipit odio ex, beatae libero dolorum nisi dolorem doloribus
        repudiandae excepturi sapiente autem eveniet, eius animi placeat
        corporis dignissimos reprehenderit consequatur quibusdam quasi quidem
        unde. Commodi obcaecati quam maxime qui a, debitis hic, veniam saepe
        voluptatibus quidem dolore. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe cupiditate tenetur corrupti molestias beatae.
        Reprehenderit temporibus, sit recusandae ab excepturi sunt quo esse unde
        quam, quas placeat, eveniet corporis iusto animi. Distinctio consequatur
        ut quaerat facere harum, voluptate possimus, repellat architecto vero
        ratione voluptas alias expedita quos aspernatur deleniti fugiat fugit
        impedit similique, facilis vitae aperiam molestias placeat veritatis
        quia! Veritatis sit suscipit odio ex, beatae libero dolorum nisi dolorem
        doloribus repudiandae excepturi sapiente autem eveniet, eius animi
        placeat corporis dignissimos reprehenderit consequatur quibusdam quasi
        quidem unde. Commodi obcaecati quam maxime qui a, debitis hic, veniam
        saepe voluptatibus quidem dolore. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe cupiditate tenetur corrupti molestias beatae.
        Reprehenderit temporibus, sit recusandae ab excepturi sunt quo esse unde
        quam, quas placeat, eveniet corporis iusto animi. Distinctio consequatur
        ut quaerat facere harum, voluptate possimus, repellat architecto vero
        ratione voluptas alias expedita quos aspernatur deleniti fugiat fugit
        impedit similique, facilis vitae aperiam molestias placeat veritatis
        quia! Veritatis sit suscipit odio ex, beatae libero dolorum nisi dolorem
        doloribus repudiandae excepturi sapiente autem eveniet, eius animi
        placeat corporis dignissimos reprehenderit consequatur quibusdam quasi
        quidem unde. Commodi obcaecati quam maxime qui a, debitis hic, veniam
        saepe voluptatibus quidem dolore.
      </p>
      <Example>
        <Popover placement="top-start">
          <Button prefix={<Icon type={IconType.Earth} />} rounded>
            Город
          </Button>
          <Menu>
            <MenuGroup label="Россия">
              <MenuItem>Екатеринбург</MenuItem>
              <MenuItem>Челябинск</MenuItem>
            </MenuGroup>
          </Menu>
        </Popover>
      </Example>
    </Wrapper>
  );
};

export default {
  title: 'Atoms/Popover',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
