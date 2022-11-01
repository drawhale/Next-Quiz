import styled from "styled-components";
import { useQuizContext } from "context/QuizContext";

import type { FC } from "react";

const QuizDone: FC = () => {
  const quizContext = useQuizContext();
  const { quiz } = quizContext;

  return (
    <Wrapper>
      <InfoWrapper>
        <div>소요된 시간</div>
        <div>{quiz.recordTime}</div>
      </InfoWrapper>

      <AnswerCountWrapper>
        <InfoWrapper>
          <div>정답수</div>
          <div>{quiz.correctAnswerCount}</div>
        </InfoWrapper>
        <Divider />
        <InfoWrapper>
          <div>오답수</div>
          <div>{quiz.incorrectAnswerCount}</div>
        </InfoWrapper>
      </AnswerCountWrapper>
    </Wrapper>
  );
};

export default QuizDone;

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const InfoWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:first-child {
    font-size: 3rem;
    color: #777777;
  }
  > div:last-child {
    font-size: 5rem;
    font-weight: bold;
    color: #333333;
  }
`;

const AnswerCountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Divider = styled.div`
  width: 2px;
  height: 60px;
  background-color: #dddddd;
`;
