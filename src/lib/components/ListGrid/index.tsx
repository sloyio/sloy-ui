import { ReactNode } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

const Wrapper = styled.label`
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  line-height: 18px;
  user-select: none;
  cursor: pointer;
  ${({ theme }) => css`
    gap: ${theme.size.m};
    padding: ${theme.size.m} ${theme.size.m};
    border-radius: ${theme.size.s};
    &:hover {
      ${getBackgroundStyle({
        color: theme.colors.background.secondary,
        opacity: theme.background.opacity.hover,
      })};
    }
    &:active {
      ${getBackgroundStyle({
        color: theme.colors.background.tertiary,
        opacity: theme.background.opacity.active,
      })};
    }
  `}
`;

const Content = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SubTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.text.color.primary};
  `}
  margin-top: 1px;
  font-feature-settings: 'tnum';
`;

const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.text.color.tertiary};
  `}
`;

const Prefix = styled.div``;

const Postfix = styled.div`
  ${({ theme }) => css`
    color: ${theme.text.color.tertiary};
  `}
  white-space: nowrap;
  margin-top: 1px;
  font-feature-settings: 'tnum';
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
