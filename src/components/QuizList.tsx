import { useRef, useState } from "react";
import styled from "styled-components";
import { slideIn } from "./common/styleVariables";
import { useQuizContext } from "context/QuizContext";
import QuestionCard from "components/common/QuestionCard";
import Button from "components/common/Button";
import { QUIZ_QUEISTION_AMOUNT } from "model/Quiz";

import type { FC } from "react";

const ANIMATION_DELAY = 200;

const QuizList: FC = () => {
  const quizContext = useQuizContext();
  const { quiz, onDoneQuiz } = quizContext;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const listItemRef = useRef<HTMLDivElement>(null);

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowNextButton(true);
  };

  const handleNextClick = () => {
    const isCorrect = quiz.solveQuestion(questionIndex, selectedAnswer);
    const nextQuestionIndex = quiz.nextQuestionIndex;

    if (listItemRef.current) {
      // 문제를 맞춘 경우 카드를 왼쪽으로, 틀린 경우 위로 이동함
      const transformString = isCorrect
        ? "translate3d(-100vw, 0px, 0px)"
        : "translate3d(0px, -100vh, 0px)";

      listItemRef.current.style.cssText = `transform: ${transformString}; opacity: 0;`;
    }

    setTimeout(() => {
      if (nextQuestionIndex === questionIndex) {
        onDoneQuiz();
        return;
      }

      setQuestionIndex(nextQuestionIndex);
      setSelectedAnswer("");
      setShowNextButton(false);
    }, ANIMATION_DELAY);
  };

  const quizItem = quiz.items[questionIndex];

  return (
    <Wrapper>
      <Description>
        {questionIndex + 1} / {QUIZ_QUEISTION_AMOUNT} Question
      </Description>
      <ListWrapper>
        <ListItem ref={listItemRef} key={questionIndex}>
          <QuestionCard
            question={quizItem.question}
            answers={quizItem.incorrect_answers}
            correctAnswer={quizItem.correct_answer}
            onSelectAnswer={handleSelectAnswer}
          />
        </ListItem>
        <Button visible={showNextButton} onClick={handleNextClick}>
          다음 문항
        </Button>
      </ListWrapper>
    </Wrapper>
  );
};

export default QuizList;

const Wrapper = styled.section`
  padding: 20px;
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  ${slideIn};
`;

const Description = styled.div`
  align-self: flex-end;
  font-size: 2.4rem;
  color: #999999;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

const ListItem = styled.div`
  width: 100%;
  opacity: 1;
  transition: transform 0.3s ease-in-out, opacity 0.3s;

  ${slideIn};
`;
