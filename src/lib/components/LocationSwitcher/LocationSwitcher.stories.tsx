import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import LocationSwitcher from '.';

const Wrapper = styled.div`
  display: flex;
`;

const Template: StoryFn<typeof LocationSwitcher> = () => {
  const [activeLocation, setActiveLocation] = useState<string>('ekaterinburg');

  return (
    <Wrapper>
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
