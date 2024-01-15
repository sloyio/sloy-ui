import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

const Wrapper = styled.label`
  display: flex;
  font-size: 14px;
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
        opacity: theme.listGrid.opacity.hover,
      })};
    }
    &:active {
      ${getBackgroundStyle({
        color: theme.colors.background.tertiary,
        opacity: theme.listGrid.opacity.active,
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
