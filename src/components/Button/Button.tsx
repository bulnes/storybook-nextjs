import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: 'primary' | 'accent';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;

  ${({ theme, variant }) => ({
    backgroundColor: theme.colors[variant].main,
    color: theme.colors[variant].text,

    ':hover': {
      backgroundColor: theme.colors[variant].light,
    },

    ':focus': {
      backgroundColor: theme.colors[variant].dark,
    },
  })}
`

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  onClick: () => {}
}
