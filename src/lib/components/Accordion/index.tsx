import { ReactNode, forwardRef } from 'react';
import styled, { css, StyleFunction } from 'styled-components';
import { rgba } from 'polished';
import { Switch } from '../Switch';
import { ICheckboxState } from '../../types/ICheckboxState';

type Gap = 0 | 8 | 16;

interface Props extends ICheckboxState {
  title: ReactNode;
  children: ReactNode;
  subTitle?: ReactNode;
  active?: boolean;
  verticalGap?: Gap;
  horizontalGap?: Gap;
}

interface AccordionProps {
  color: string;
  opacity: number;
  blur: boolean;
}

const getBackgroundStyle: StyleFunction<AccordionProps> = ({
  theme,
  color,
  opacity,
  blur,
}) => {
  const selectedColor = theme.colors.background[color];
  const selectedOpacity = theme.opacity[opacity];

  if (blur) {
    return `
      background-color: ${rgba(selectedColor, selectedOpacity)};
      backdrop-filter: blur(20px);
    `;
  } else if (selectedOpacity < 1) {
    return `
      background-color: ${rgba(selectedColor, selectedOpacity)};
    `;
  }

  return `
    background-color: ${selectedColor};
  `;
};

const Wrapper = styled.label<AccordionProps & { $opened?: boolean }>`
  display: flex;
  font-size: ${({ theme }) => theme.size.xl};
  line-height: ${({ theme }) => theme.size.xxl};
  gap: ${({ theme }) => theme.size.s};
  background-color: none;
  padding: ${({ theme }) => theme.size.l};
  border-radius: ${({ theme }) => theme.size.m};
  user-select: none;
  cursor: pointer;
  transition: background-color 0.05s ease-out;
  &:hover {
    ${({ theme }) =>
      getBackgroundStyle({
        theme,
        color: 'secondary',
        opacity: 'hover',
        blur: false,
      })};
  }
  &:active {
    ${({ theme }) =>
      getBackgroundStyle({
        theme,
        color: 'tertiary',
        opacity: 'secondary',
        blur: false,
      })};
  }
  ${({ $opened }) =>
    $opened &&
    css`
      ${({ theme }) =>
        getBackgroundStyle({
          theme,
          color: 'tertiary',
          opacity: 'secondary',
          blur: false,
        })};
      border-radius: ${({ theme }) => theme.size.m}
        ${({ theme }) => theme.size.m} 0 0;
    `}
`;
const Content = styled.div`
  width: 100%;
  gap: ${({ theme }) => theme.size.xs};
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.s};
`;
const Title = styled.span`
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const SubTitle = styled.span`
  color: #9baac3;
`;

const Postfix = styled.div`
  color: #9baac3;
`;

const Container = styled.div``;

const Body = styled.div<
  AccordionProps & {
    $horizontalGap: Gap;
    $verticalGap: Gap;
  }
>`
  ${({ theme }) =>
    getBackgroundStyle({
      theme,
      color: 'tertiary',
      opacity: 'secondary',
      blur: false,
    })};
  border-radius: 0 0 ${({ theme }) => theme.size.m}
    ${({ theme }) => theme.size.m};
  padding: 0 ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.s};
  &:empty {
    display: none;
  }
`;

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  function AccordionItem(
    {
      title,
      subTitle,
      horizontalGap = 16,
      verticalGap = 8,
      children,
      toggle,
      isSelected,
    },
    ref,
  ) {
    return (
      <Container ref={ref}>
        <Wrapper $opened={isSelected}>
          <Content>
            <TitleWrapper>
              <Title>{title}</Title>
              {subTitle && <SubTitle>{subTitle}</SubTitle>}
            </TitleWrapper>
          </Content>
          <Postfix>
            <Switch isSelected={isSelected} toggle={toggle} />
          </Postfix>
        </Wrapper>
        {isSelected && children && (
          <Body $horizontalGap={horizontalGap} $verticalGap={verticalGap}>
            {children}
          </Body>
        )}
      </Container>
    );
  },
);

export const Accordion = styled.div<AccordionProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.size.xl};
  padding: ${({ theme }) => theme.size.m};
  gap: ${({ theme }) => theme.size.s};
  overflow: auto;
  ${({ theme }) =>
    getBackgroundStyle({
      theme,
      color: 'primary',
      opacity: 'primary',
      blur: true,
    })};

  ${Container} {
    border-radius: ${({ theme }) => theme.size.m} ${({ theme }) => theme.size.m}
      0 0;
  }

  ${Container}:last-child {
    border-radius: 0 0 ${({ theme }) => theme.size.m}
      ${({ theme }) => theme.size.m};
  }
`;
