import React, { ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

export enum ButtonType {
  ACCENT = 'accent',
  DEFAULT = 'default',
  CONTRAST = 'contrast',
  COMBOBOX = 'combobox',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  prefix?: ReactNode;
  postfix?: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function getTypeStyles({ $type = ButtonType.ACCENT }: { $type: ButtonType }) {
  switch ($type) {
    case ButtonType.ACCENT:
      return css`
        background: #ffd400;
        color: black;
        &:hover {
          background: #e1bb00;
        }
        &:active {
          background: #c7a500;
        }
      `;
    case ButtonType.DEFAULT:
      return css`
        ${({ theme }) => css`
          color: ${theme.text.color.secondary};
          ${getBackgroundStyle({
            color: theme.buttons.color.default,
            opacity: theme.buttons.opacity.default,
            blur: theme.buttons.blur,
          })};
        `}

        &:hover {
          ${({ theme }) => css`
            ${getBackgroundStyle({
              color: theme.buttons.color.hover,
              opacity: theme.buttons.opacity.hover,
              blur: theme.buttons.blur,
            })};
          `}
        }

        &:active {
          ${({ theme }) => css`
            ${getBackgroundStyle({
              color: theme.buttons.color.active,
              opacity: theme.buttons.opacity.active,
              blur: theme.buttons.blur,
            })};
          `}
        }
      `;
    case ButtonType.CONTRAST:
      return css`
        background: #000;
        color: #fff;
        &:hover {
          background: #0a0a0a;
        }
        &:active {
          background: #141414;
        }
      `;
    default:
      return null;
  }
}

function getSizeStyles({ $size = ButtonSize.LARGE }: { $size: ButtonSize }) {
  switch ($size) {
    case ButtonSize.SMALL:
      return css`
        padding: 3px 8px;
        border-radius: 16px;
        font-size: 12px;
        line-height: 14px;
      `;
    case ButtonSize.MEDIUM:
      return css`
        padding: 8px 12px;
        font-size: 14px;
        line-height: 18px;
      `;
    case ButtonSize.LARGE:
    default:
      return css`
        padding: 8px 12px;
        font-size: 16px;
        line-height: 20px;
      `;
  }
}

function getRoundedStyles({ $rounded }: { $rounded?: boolean }) {
  if ($rounded) {
    return css`
      border-radius: 72px;
    `;
  }

  return css`
    border-radius: 8px;
  `;
}

function getFullWidthStyles({ $fullWidth }: { $fullWidth?: boolean }) {
  if ($fullWidth) {
    return css`
      width: 100%;
    `;
  }

  return null;
}

export const BaseButton = styled.button<{
  $type: ButtonType;
  $size: ButtonSize;
  $rounded?: boolean;
  $fullWidth?: boolean;
}>`
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.15s ease;
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  ${getRoundedStyles}
  ${getTypeStyles}
  ${getSizeStyles}
  ${getFullWidthStyles}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      prefix,
      postfix,
      size = ButtonSize.MEDIUM,
      rounded,
      type = ButtonType.DEFAULT,
      href,
      children,
      className,
      onClick,
      fullWidth,
    },
    ref,
  ) {
    const buttonProps = href
      ? {
          as: 'a',
          target: '_blank',
          rel: 'noreferrer',
        }
      : {};

    const allProps = {
      ...buttonProps,
      href,
      onClick,
      $size: size,
      $rounded: rounded,
      $type: type,
      $fullWidth: fullWidth,
    };

    return (
      <BaseButton {...allProps} className={className} ref={ref}>
        {prefix}
        {children}
        {postfix}
      </BaseButton>
    );
  },
);
