import { ReactNode } from 'react';
import styled, { css, StyleFunction } from 'styled-components';
import { rgba } from 'polished';

interface AccordionProps {
  color: string;
  opacity: number;
}

const getBackgroundStyle: StyleFunction<AccordionProps> = ({
  theme,
  color, // в таком случае это проп компонента аккордион
  opacity, // в таком случае это проп компонента аккордион
  // но возможно тебе нужна именно тема, типа theme.card.opacity
  // и тогда аргументы color и opacity можно будет удалить
}) => {
  const selectedColor = theme.colors.background[color];
  const selectedOpacity = theme.opacity[opacity];

  if (theme.blur > 0) {
    return `
      background-color: ${rgba(selectedColor, selectedOpacity)};
      backdrop-filter: blur(${theme.blur}px);
    `;
  }

  return `
    background-color: ${selectedColor};
  `;
};

const Wrapper = styled.label<AccordionProps>`
  display: flex;
  font-size: 14px;
  line-height: 18px;
  user-select: none;
  gap: ${({ theme }) => theme.size.m};
  cursor: pointer;
  padding: ${({ theme }) => theme.size.m} ${({ theme }) => theme.size.m};
  border-radius: ${({ theme }) => theme.size.s};
  &:hover {
    ${({ theme }) =>
      getBackgroundStyle({ theme, color: 'secondary', opacity: 'secondary' })};
  }
`;
const Content = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const Title = styled.span`
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const SubTitle = styled.span`
  color: #9baac3;
`;
const Description = styled.div`
  color: #9baac3;
`;
const Prefix = styled.div``;
const Postfix = styled.div`
  color: #9baac3;
  white-space: nowrap;
`;

interface Props {
  subTitle?: ReactNode;
  description?: ReactNode;
  prefix?: ReactNode;
  postfix?: ReactNode;
  children: ReactNode;
}

export interface ListGridProps {
  verticalGap?: 0 | 8 | 16;
}

export const ListGrid = styled.div<ListGridProps>`
  display: flex;
  flex-direction: column;
  // gap: ${({ verticalGap = 16 }) => css`
    //   ${verticalGap}px
    //
  `};
`;

export function ListGridItem({
  subTitle,
  description,
  prefix,
  postfix,
  children,
}: Props) {
  return (
    <Wrapper>
      {prefix && <Prefix>{prefix}</Prefix>}
      <Content>
        <TitleWrapper>
          <Title>{children}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
        </TitleWrapper>
        {description && <Description>{description}</Description>}
      </Content>
      {postfix && <Postfix>{postfix}</Postfix>}
    </Wrapper>
  );
}
