import styled from "styled-components";
import Card from "components/common/Card";

import type { FC } from "react";

type Props = {
  question: string;
  correctAnswer: string;
  selectedAnswer: string;
};

const ReviewCard: FC<Props> = ({ question, correctAnswer, selectedAnswer }) => {
  return (
    <Card>
      <Question>{question}</Question>
      <AnswerWrapper>
        <Description>정답</Description>
        <CorrectAnswer>{correctAnswer}</CorrectAnswer>
      </AnswerWrapper>
      <AnswerWrapper>
        <Description>선택한 답</Description>
        <Answer>{selectedAnswer}</Answer>
      </AnswerWrapper>
    </Card>
  );
};

export default ReviewCard;

const Question = styled.div`
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bold;
  word-break: break-word;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  margin: 20px 0 6px;
  font-size: 1.4rem;
  color: #777777;
`;

const Answer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 3rem;
  font-size: 2rem;
  border: 5px solid #ffffff;
`;

const CorrectAnswer = styled(Answer)`
  border: 5px solid #49b05d;
`;
