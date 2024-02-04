import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Accordion, AccordionItem } from '.';
import { Checkbox, useCheckboxState } from '../Checkbox';
import { ListGrid, ListGridHeader, ListGridItem } from '../ListGrid';
import { RangeHistorgramDemo } from '../RangeHistogram/RangeHistogram.stories';
import React from 'react';

export default {
  title: 'Organisms/Accordion',
  component: Accordion,
  argTypes: {},
};

function StatefulAccordionItem(props: ComponentProps<typeof AccordionItem>) {
  const state = useCheckboxState();

  return <AccordionItem {...state} {...props} />;
}

function ItemCheckbox() {
  const state = useCheckboxState();

  return <Checkbox {...state} />;
}

const Template: StoryFn<typeof Accordion> = () => {
  const rows = [
    {
      id: 1,
      title: 'Красная линия',
      subTitle: '35',
      description: 'Маршрут по историческому центру города',
      postfix: '56 %',
    },
    {
      id: 2,
      title: 'Синяя линия',
      subTitle: '11',
      postfix: '23 %',
    },
    {
      id: 3,
      title: 'Title',
      subTitle: '29',
      description: 'Арт-объекты фестиваля уличного искусства «Стенограффия»',
      postfix: '31 %',
    },
  ];

  const oknObjects = [
    {
      id: 1,
      title: 'Регионального значения',
      subTitle: '667',
      postfix: '88',
    },
    {
      id: 2,
      title: 'Федерального значения',
      subTitle: '82',
      postfix: '11',
    },
    {
      id: 3,
      title: 'Местного значения',
      subTitle: '11',
      postfix: '1',
    },
  ];

  const oknZones = [
    {
      id: 1,
      title: 'Границы территорий',
      description:
        'Объекты культурного наследия и неотделимая от него территория',
      subTitle: '681',
      postfix: '48',
    },
    {
      id: 2,
      title: 'Защитные зоны',
      description:
        'Временная зона в 100-250 метров вокруг объекта, у которого пока не указана зона охраны',
      subTitle: '519',
      postfix: '37',
    },
    {
      id: 3,
      title: 'Зоны охраны',
      description:
        'Территории, в пределах которых запрещены любые работы, так как они могут причинить вред объекту',
      subTitle: '211',
      postfix: '15',
    },
  ];

  return (
    <div style={{ maxWidth: 400 }}>
      <Accordion>
        <StatefulAccordionItem title="Checkboxes" subTitle="123">
          <ListGrid>
            {rows.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
        </StatefulAccordionItem>
        <StatefulAccordionItem title="Hostogram" subTitle="345">
          <RangeHistorgramDemo />
        </StatefulAccordionItem>
        <StatefulAccordionItem title="Возраст домов" subTitle="991">
          Текст
        </StatefulAccordionItem>
        <StatefulAccordionItem title="Объекты культурного наследия">
          <ListGrid>
            <ListGridHeader
              prefix={<ItemCheckbox />}
              description="760"
              subTitle="%"
              postfix="шт."
            >
              Объекты ОКН
            </ListGridHeader>
            {oknObjects.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
          <ListGrid style={{ marginTop: 16 }}>
            <ListGridHeader
              prefix={<ItemCheckbox />}
              description="1411"
              subTitle="%"
              postfix="шт."
            >
              Зоны ОКН
            </ListGridHeader>
            {oknZones.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
        </StatefulAccordionItem>
      </Accordion>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
