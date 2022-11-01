import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ children, className, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  border: 0;
  outline: 0;
  padding: 2rem 6rem;
  font-size: 2rem;
  color: #ffffff;
  background-color: #00c896;
  border-radius: 3rem;
  filter: drop-shadow(1px 1px 6px #00000055);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active {
    background-color: #00b386;
  }
`;
