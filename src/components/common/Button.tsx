import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Button: FC<Props> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
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
`;
