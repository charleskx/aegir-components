import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { FiLoader } from 'react-icons/fi';
import { IconType } from 'react-icons';

import * as S from './styles';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactChild;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  startIcon?: IconType;
  endIcon?: IconType;
  loading?: boolean;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  return (
    <S.ButtonWrapper
      variant={variant}
      size={size}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <S.Loading>
          <FiLoader />
        </S.Loading>
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </S.ButtonWrapper>
  );
};
