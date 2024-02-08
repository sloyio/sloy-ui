import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { IDropdownItem } from '../../types/IDropdownItem';
import LocationSwitcher from '../LocationSwitcher/index';

const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
`;
const Example = styled.div``;

const dropdownItems: IDropdownItem[] = [
  {
    country: 'Россия',
    cities: [
      {
        id: 'ekaterinburg',
        name: 'Екатеринбург',
      },
      {
        id: 'chelyabinsk',
        name: 'Челябинск',
      },
    ],
  },
  {
    country: 'Армения',
    cities: [
      {
        id: 'whole-country',
        name: 'Вся страна',
      },
      {
        id: 'erevan',
        name: 'Ереван',
      },
    ],
  },
  {
    country: 'Финляндия',
    cities: [
      {
        id: 'helsinki',
        name: 'Хельсинки',
      },
    ],
  },
] as const;

const Template: StoryFn<typeof LocationSwitcher> = () => {
  const [activeLocation, setActiveLocation] = useState<string>('ekaterinburg');

  return (
    <Wrapper>
      <Example>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          cupiditate tenetur corrupti molestias beatae. Reprehenderit
          temporibus, sit recusandae ab excepturi sunt quo esse unde quam, quas
          placeat, eveniet corporis iusto animi. Distinctio consequatur ut
          quaerat facere harum, voluptate possimus, repellat architecto vero
          ratione voluptas alias expedita quos aspernatur deleniti fugiat fugit
          impedit similique, facilis vitae aperiam molestias placeat veritatis
          quia! Veritatis sit suscipit odio ex, beatae libero dolorum nisi
          dolorem doloribus repudiandae excepturi sapiente autem eveniet, eius
          animi placeat corporis dignissimos reprehenderit consequatur quibusdam
          quasi quidem unde. Commodi obcaecati quam maxime qui a, debitis hic,
          veniam saepe voluptatibus quidem dolore.
        </p>
        <LocationSwitcher
          items={dropdownItems}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
      </Example>
    </Wrapper>
  );
};

export default {
  title: 'Atoms/Menu',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
