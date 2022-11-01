import styled from "styled-components";
import { slideIn } from "components/common/styleVariables";

import type { FC } from "react";

const QuizLoading: FC = () => {
  return <Wrapper>퀴즈 만드는 중 . . .</Wrapper>;
};

export default QuizLoading;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  ${slideIn};
`;
