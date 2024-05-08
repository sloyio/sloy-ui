import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Combobox, ComboboxGroup, ComboboxItem } from '.';

export default {
  title: 'Atoms/Combobox',
  component: Combobox,
};

const sections = [
  {
    label: 'Армения',
    items: [
      { label: 'Вся страна', id: 'whole_country' },
      { label: 'Ереван', id: 'erevan' },
    ],
  },
  {
    label: 'Россия',
    items: [
      { label: 'Екатеринбург', id: 'ekaterinburg' },
      { label: 'Челябинск', id: 'chelyabinsk' },
    ],
  },
];

const Template: StoryFn<typeof Combobox> = () => {
  const [city, setCity] = useState<string>('ekaterinburg');

  return (
    <Combobox>
      {sections.map((elem) => (
        <ComboboxGroup label={elem.label}>
          {elem.items.map((el) => {
            const isActive = el.id === city;
            return (
              <ComboboxItem onClick={() => setCity(el.id)} isActive={isActive}>
                {el.label}
              </ComboboxItem>
            );
          })}
        </ComboboxGroup>
      ))}
    </Combobox>
  );
};

export const Default = Template.bind({});
Default.args = {};
