import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import LocationSwitcher from '.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const Template: StoryFn<typeof LocationSwitcher> = () => {
  const [activeLocation, setActiveLocation] = useState<string>('ekaterinburg');

  return (
    <Wrapper>
      <p>
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
        voluptatibus quidem dolore.
      </p>
      <LocationSwitcher
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
    </Wrapper>
  );
};

export default {
  title: 'Atoms/LocationSwitcher',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
