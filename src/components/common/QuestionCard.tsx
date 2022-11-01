import { useState } from "react";
import styled from "styled-components";
import Card from "components/common/Card";
import CheckIcon from "components/common/CheckIcon";
import CorrectCheckIcon from "components/common/CorrectCheckIcon";
import IncorrectIcon from "components/common/IncorrectIcon";

import type { FC } from "react";

type Props = {
  question: string;
  answers: string[];
  correctAnswer?: string;
  onSelectAnswer: (answer: string) => void;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  correctAnswer,
  onSelectAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerClick = (answer: string) => {
    if (showCorrectAnswer) {
      return;
    }

    setSelectedAnswer(answer);
    onSelectAnswer(answer);

    if (correctAnswer) {
      setShowCorrectAnswer(true);
    }
  };

  const shouldRenderCorrectAnswer =
    Boolean(correctAnswer) && correctAnswer !== "" && showCorrectAnswer;

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
            $correct={shouldRenderCorrectAnswer && answer === correctAnswer}
            onClick={() => handleAnswerClick(answer)}
          >
            <span>{answer}</span>
            {/* 사용자가 선택한 답인 경우 */}
            {!showCorrectAnswer && selectedAnswer === answer && <CheckIcon />}

            {/* 정답 표시 상황에서 사용자가 선택한 답인 경우 */}
            {showCorrectAnswer &&
              selectedAnswer === answer &&
              (selectedAnswer === correctAnswer ? (
                <CorrectCheckIcon />
              ) : (
                <IncorrectIcon />
              ))}
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
  word-break: break-word;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Answer = styled.div<{ $selected: boolean; $correct?: boolean }>`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 3rem;
  font-size: 2rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  border: 5px solid #ffffff;

  &:hover {
    background-color: #eeeeee;
  }

  ${(props) => props.$selected && `font-weight: bold;`}
  ${(props) =>
    props.$correct &&
    `
    border: 5px solid #49b05d;
    `}
`;
