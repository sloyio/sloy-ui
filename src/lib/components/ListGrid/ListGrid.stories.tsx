import { StoryFn } from '@storybook/react';
import { ListGrid, ListGridItem } from '.';
import { Checkbox } from '../Checkbox';
import React from 'react';

export default {
  title: 'Atoms/ListGrid',
  component: ListGrid,
  argTypes: {},
};

const Template: StoryFn<typeof ListGrid> = (args: any) => {
  const rows = [
    {
      id: 1,
      title: 'Красная линия',
      subTitle: '56%',
      description: 'Маршрут по историческому центру города',
      postfix: '35',
    },
    {
      id: 2,
      title: 'Синяя линия',
      subTitle: '23%',
      description: 'Маршрут по местам, связанными c царской семьей',
      postfix: '11',
    },
    {
      id: 3,
      title: 'Title',
      subTitle: '31%',
      description: 'Арт-объекты фестиваля уличного искусства «Стенограффия»',
      postfix: '29',
    },
  ];

  return (
    <ListGrid {...args}>
      {rows.map((item) => (
        <ListGridItem key={item.id} prefix={<Checkbox />} {...item}>
          {item.title}
        </ListGridItem>
      ))}
    </ListGrid>
  );
};

export const Default = Template.bind({});
Default.args = {};
