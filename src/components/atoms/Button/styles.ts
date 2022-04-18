import styled, { css, keyframes } from 'styled-components';
import { IButtonProps } from '.';

const variantModifiers = {
  contained: () => css`
    color: #fff;
    background-color: #1976d2;

    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  `,

  outlined: () => css`
    border: 1px solid rgba(25, 118, 210, 0.5);

    background-color: transparent;
    color: #1976d2;

    &:disabled {
      background-color: transparent;
    }
  `,

  text: () => css`
    padding: 0.6rem 0.8rem;

    &:active {
      box-shadow: none;
    }

    &:disabled {
      background-color: transparent;
    }
  `,
};

const sizeModifiers = {
  small: () => css`
    font-size: 0.8125rem;
    padding: 0.4rem 1rem;
  `,
  medium: () => css`
    font-size: 0.875rem;
    padding: 0.6rem 1.6rem;
  `,
  large: () => css`
    font-size: 0.9375rem;
    padding: 0.8rem 2.2rem;
  `,
};

const disabledModifiers = {
  disabled: () => css`
    pointer-events: none;

    &:disabled {
      background-color: rgba(0, 0, 0, 0.12);
      border-color: rgba(0, 0, 0, 0.12);
      color: rgba(0, 0, 0, 0.26);

      box-shadow: none;
    }
  `,
};

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const ButtonWrapper = styled.button<IButtonProps>`
  ${({ variant, size, disabled }) => css`
    cursor: pointer;

    user-select: none;

    font-weight: 500;
    letter-spacing: 0.02857em;

    text-transform: uppercase;

    display: flex;
    position: relative;
    overflow: hidden;
    gap: 0.8rem;

    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 0.2rem;

    min-width: 0.64rem;

    outline: none;
    transition: 0.2s all;

    background-color: transparent;

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    ${disabled && disabledModifiers.disabled()}
    ${size && sizeModifiers[size]()}
    ${variant && variantModifiers[variant]()}
  `}
`;

export const Loading = styled.span`
  transition: all 0.3s;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
