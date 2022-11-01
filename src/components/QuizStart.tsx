import { useState } from "react";
import styled from "styled-components";
import Button from "components/common/Button";
import QuestionCard from "components/common/QuestionCard";
import { useQuizContext } from "context/QuizContext";
import { QUIZ_DIFFICULTYS } from "model/Quiz";

import type { FC } from "react";
import type { QuizDifficulty } from "model/Quiz";

const QuizStart: FC = () => {
  const quizContext = useQuizContext();

  const [step, setStep] = useState(1);
  const [difficulty, setDifficulty] = useState<QuizDifficulty | null>(null);

  const handleSelectClick = () => {
    if (!difficulty) {
      return;
    }

    quizContext.onStartQuiz({
      difficulty,
    });
  };

  return (
    <Wrapper>
      {step === 1 && (
        <Step1Wrapper>
          <Button onClick={() => setStep(2)}>퀴즈 풀기</Button>
        </Step1Wrapper>
      )}
      {step === 2 && (
        <Step2Wrapper>
          <Description>
            무작위로 선택된 카테고리로
            <br />
            10개의 문항을 풀게 됩니다.
          </Description>
          <QuestionCard
            question="퀴즈의 난이도를 선택해주세요."
            answers={QUIZ_DIFFICULTYS}
            onSelectAnswer={(answer) => setDifficulty(answer as QuizDifficulty)}
          />
          <Button visible={difficulty !== null} onClick={handleSelectClick}>
            시작하기
          </Button>
        </Step2Wrapper>
      )}
    </Wrapper>
  );
};

export default QuizStart;

const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
`;

const Step1Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Step2Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;

  animation: slideIn 0.3s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translate3d(100vw, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 2.2rem;
  line-height: 3rem;
  text-align: center;
`;
