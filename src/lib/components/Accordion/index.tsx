import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';
import { Container } from './AccordionItem';

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  ${({ theme }) => css`
    border-radius: ${theme.size.xl};
    padding: ${theme.size.m};
    gap: ${theme.size.s};

    ${getBackgroundStyle({
      color: theme.colors.background.primary,
      opacity: theme.background.opacity.default,
      blur: theme.background.blur,
    })};

    ${Container} {
      border-radius: ${theme.size.m} ${theme.size.m} 0 0;
    }

    ${Container}:last-child {
      border-radius: 0 0 ${theme.size.m} ${theme.size.m};
    }
  `}
`;

export { AccordionItem } from './AccordionItem';
