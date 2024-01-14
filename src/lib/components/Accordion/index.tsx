import { ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
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

const Wrapper = styled.label<{ $opened?: boolean }>`
  display: flex;
  font-size: ${({ theme }) => theme.size.xl};
  line-height: ${({ theme }) => theme.size.xxl};
  gap: ${({ theme }) => theme.size.s};
  background-color: none;
  padding: ${({ theme }) => theme.size.l};
  border-radius: ${({ theme }) => theme.size.m};
  user-select: none;
  cursor: pointer;
  transition: background-color .05s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }
  ${({ $opened, theme }) =>
    $opened &&
    css`
      background-color: ${theme.colors.background.tertiary};
      border-radius: ${({ theme }) => theme.size.m} ${({ theme }) => theme.size.m} 0 0;
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
  font-weight: 500;
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

const Body = styled.div<{
  $horizontalGap: Gap;
  $verticalGap: Gap;
}>`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: 0 0 8px 8px;
  padding: ${({ $horizontalGap, $verticalGap }) => css`
    ${$verticalGap}px
    ${$horizontalGap}px
    ${$verticalGap + 16}px
    ${$horizontalGap}px
  `};
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

// function getBackgroundStyle({ theme }, color, opacity) {
//   const selectedColor = theme.colors.background[color];
//
//   if (theme.blur > 0) {
//     return `
//       background-color: ${rgba(selectedColor, opacity)};
//       backdrop-filter: blur(${theme.blur});
//     `
//   }
//
//   return `
//     background-color: ${selectedColor};
//   `
// }


export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.size.xl};
  padding: ${({ theme }) => theme.size.m};
  gap: ${({ theme }) => theme.size.s};
  background-color: ${({ theme }) => theme.colors.background.primary};
  backdrop-filter: blur(20px);
  overflow: auto;
  ${'' /* ${getBackgroundStyle({ theme }, 'primary', 0.7)}; */}

  ${Container} {
    border-radius: ${({ theme }) => theme.size.m} ${({ theme }) => theme.size.m} 0 0;
  }

  ${Container}:last-child {
    border-radius: 0 0 ${({ theme }) => theme.size.m} ${({ theme }) => theme.size.m};
  }
`;
