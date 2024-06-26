import { StoryFn } from '@storybook/react';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonSize, ButtonType, Dropdown, Icon, IconType } from '..';

const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
`;

const Example = styled.div``;

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

const Template: StoryFn = () => {
  const [city, setCity] = useState<string>('ekaterinburg');

  const cityName = useMemo(() => {
    return sections
      .map((elem) => elem.items)
      .flat()
      .find((elem) => elem.id === city)?.label;
  }, [city]);

  function onClick(city: string) {
    setCity(city);
  }

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
        <Dropdown placement="top-start">
          <Dropdown.Trigger>
            <Button
              type={ButtonType.DEFAULT}
              size={ButtonSize.MEDIUM}
              prefix={<Icon type={IconType.Earth} />}
              rounded
            >
              {cityName}
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            {sections.map((group) => (
              <Dropdown.MenuGroup title={group.label}>
                {group.items.map((item) => (
                  <Dropdown.MenuItem
                    onClick={() => onClick(item.id)}
                    isActive={item.id === city}
                  >
                    {item.label}
                  </Dropdown.MenuItem>
                ))}
              </Dropdown.MenuGroup>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Example>
    </Wrapper>
  );
};

export default {
  title: 'Atoms/Dropdown',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
