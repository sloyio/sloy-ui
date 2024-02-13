import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import SegmentedControl from '.';

const Template: StoryFn = () => {
  const [activeElem, setActiveElem] = useState<number>(0);

  return (
    <SegmentedControl
      items={['am', 'ru', 'en']}
      activeItemIndex={activeElem}
      onChange={setActiveElem}
    />
  );
};

export default {
  title: 'Atoms/SegmentedControl',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
