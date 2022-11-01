import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  visible?: boolean;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  children,
  className,
  visible = true,
  onClick,
}) => {
  return (
    <>
      {visible ? (
        <StyledButton className={className} onClick={onClick}>
          {children}
        </StyledButton>
      ) : (
        <EmptyWrapper />
      )}
    </>
  );
};

export default Button;

const EmptyWrapper = styled.div`
  width: 100%;
  height: 6.4rem;
`;

const StyledButton = styled.button`
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
  animation: scaleUp 0.1s ease-in-out;

  &:hover,
  &:active {
    background-color: #00b386;
  }

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
