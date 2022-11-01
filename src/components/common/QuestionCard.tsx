import styled from "styled-components";
import Card from "./Card";

import type { FC } from "react";

type Props = {
  question: string;
  answers: string[];
};

const QuestionCard: FC<Props> = ({ question, answers }) => {
  return (
    <Card>
      <Description>QUESTION</Description>
      <Question>{question}</Question>
      <Description>ANSWER</Description>
      <AnswerWrapper>
        {answers.map((answer) => (
          <Answer>{answer}</Answer>
        ))}
      </AnswerWrapper>
    </Card>
  );
};

export default QuestionCard;

const Description = styled.div`
  margin: 6px 0;
  font-size: 1.4rem;
  color: #cccccc;
`;

const Question = styled.div`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: bold;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Answer = styled.div`
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 3rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;
