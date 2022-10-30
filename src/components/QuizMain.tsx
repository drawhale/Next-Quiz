import styled from "styled-components";

import type { FC } from "react";

const QuizMain: FC = () => {
  return (
    <Wrapper>
      <Card>TEST</Card>
    </Wrapper>
  );
};

export default QuizMain;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Card = styled.div`
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  background-color: #ffffff;
  border-radius: 3rem;
  filter: drop-shadow(1px 1px 6px #00000055);
`;

const StartButton = styled.button`
  border: 0;
  outline: 0;
  padding: 1rem 4rem;
  font-size: 2rem;
  color: #ffffff;
  background-color: #00c896;
  border-radius: 3rem;
  filter: drop-shadow(1px 1px 6px #00000055);
  cursor: pointer;
`;
