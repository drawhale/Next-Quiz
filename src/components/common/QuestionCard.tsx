import { useState } from "react";
import styled from "styled-components";
import Card from "components/common/Card";
import CheckIcon from "components/common/CheckIcon";

import type { FC } from "react";

type Props = {
  question: string;
  answers: string[];
  onSelectAnswer: (answer: string) => void;
};

const QuestionCard: FC<Props> = ({ question, answers, onSelectAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onSelectAnswer(answer);
  };

  return (
    <Card>
      <Description>QUESTION</Description>
      <Question>{question}</Question>
      <Description>ANSWER</Description>
      <AnswerWrapper>
        {answers.map((answer) => (
          <Answer
            key={answer}
            $selected={selectedAnswer === answer}
            onClick={() => handleAnswerClick(answer)}
          >
            <span>{answer}</span>
            {selectedAnswer === answer && <CheckIcon />}
          </Answer>
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

const Answer = styled.div<{ $selected: boolean }>`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 3rem;
  font-size: 2rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #eeeeee;
  }

  ${(props) => props.$selected && `font-weight: bold;`}
`;
