import { ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
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
  font-size: 16px;
  line-height: 20px;
  gap: 4px;
  background-color: none;
  padding: 12px;
  border-radius: 8px;
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
      border-radius: 8px 8px 0 0;
    `}
`;
const Content = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
  gap: 4px;
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

const Container = styled.div`
  margin-top: 4px;
  &:first-child {
    margin-top: 0px;
  }
`;

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
`;

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  function AccordionItem(
    {
      title,
      subTitle,
      horizontalGap = 12,
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
          <Body $horizontalGap={horizontalGap as Gap} $verticalGap={verticalGap as Gap}>
            {children}
          </Body>
        )}
      </Container>
    );
  },
);

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  // box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.background.primary} inset;
  backdrop-filter: blur(20px);
  overflow: auto;

  ${Container} {
    border-radius: 8px 8px 0 0;
  }

  ${Container}:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
