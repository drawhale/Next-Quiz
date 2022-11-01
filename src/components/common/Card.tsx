import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 3rem;
  filter: drop-shadow(1px 1px 6px #00000022);
`;
