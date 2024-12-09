import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${theme.colors.primary};
          color: white;
          &:hover {
            background: ${theme.colors.primaryDark};
          }
        `;
      case 'secondary':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.border};
          &:hover {
            background: ${theme.colors.backgroundHover};
          }
        `;
      case 'danger':
        return css`
          background: ${theme.colors.error};
          color: white;
          &:hover {
            background: ${theme.colors.errorDark};
          }
        `;
    }
  }}
`; 