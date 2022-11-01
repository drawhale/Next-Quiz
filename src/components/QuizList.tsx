import { useState } from "react";
import styled from "styled-components";
import { slideIn } from "./common/styleVariables";
import { useQuizContext } from "context/QuizContext";
import QuestionCard from "components/common/QuestionCard";
import Button from "components/common/Button";

import type { FC } from "react";

const QuizList: FC = () => {
  const { quiz } = useQuizContext();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const quizItem = quiz.items[questionIndex];

  return (
    <Wrapper>
      <ListWrapper>
        <ListItem key={questionIndex}>
          <QuestionCard
            question={quizItem.question}
            answers={quizItem.incorrect_answers}
            correctAnswer={quizItem.correct_answer}
            onSelectAnswer={() => setShowNextButton(true)}
          />
        </ListItem>
      </ListWrapper>
      <Button visible={showNextButton} onClick={() => {}}>
        다음 문항
      </Button>
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
  justify-content: flex-end;
  align-items: center;
  gap: 30px;

  ${slideIn};
`;

const ListWrapper = styled.div`
  width: 100%;
`;

const ListItem = styled.div`
  width: 100%;
  height: 100%;
`;
