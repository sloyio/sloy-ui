import { ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ICheckboxState } from '../../types/ICheckboxState';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';
import { Switch } from '../Switch';
import React from 'react';

interface Props extends ICheckboxState {
  title: ReactNode;
  children: ReactNode;
  subTitle?: ReactNode;
  active?: boolean;
}

const Wrapper = styled.label<{ $opened?: boolean }>`
  display: flex;
  background-color: none;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.05s ease-out;

  ${({ theme, $opened }) => {
    const activeStyle = getBackgroundStyle({
      color: theme.colors.background.tertiary,
      opacity: theme.background.opacity.active,
    });

    return css`
      &:hover {
        ${getBackgroundStyle({
          color: theme.colors.background.secondary,
          opacity: theme.background.opacity.hover,
        })};
      }

      ${$opened && activeStyle}
      &:active {
        ${activeStyle};
      }
    `;
  }};

  ${({ theme, $opened }) => css`
    font-size: ${theme.size.xl};
    line-height: ${theme.size.xxl};
    gap: ${theme.size.s};
    padding: ${theme.size.l};
    border-radius: ${theme.size.m};

    ${$opened &&
    css`
      border-radius: ${theme.size.m} ${theme.size.m} 0 0;
    `}
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

export const Container = styled.div``;

const Body = styled.div`
  ${({ theme }) => css`
    border-radius: 0 0 ${theme.size.m} ${theme.size.m};
    padding: 0 ${theme.size.s} ${theme.size.s};

    ${getBackgroundStyle({
      color: theme.colors.background.tertiary,
      opacity: theme.background.opacity.active,
    })}
  `};

  &:empty {
    display: none;
  }
`;

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  function AccordionItem(
    { title, subTitle, children, toggle, isSelected },
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
        {isSelected && children && <Body>{children}</Body>}
      </Container>
    );
  },
);
