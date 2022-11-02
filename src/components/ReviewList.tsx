import styled from "styled-components";
import { useQuizContext } from "context/QuizContext";
import ReviewCard from "components/common/ReviewCard";

import type { FC } from "react";

const ReviewList: FC = () => {
  const quizContext = useQuizContext();
  const { quiz } = quizContext;

  const isEmpty = quiz.incorrectQueistions.length === 0;

  return (
    <Wrapper>
      {!isEmpty ? (
        <ListWrapper>
          {quiz.incorrectQueistions.map(
            ({ question, correct_answer, selected_answer }) => (
              <ReviewCard
                key={question}
                question={question}
                correctAnswer={correct_answer}
                selectedAnswer={selected_answer}
              />
            )
          )}
        </ListWrapper>
      ) : (
        <EmptyWrapper>오답노트가 비어있어요!</EmptyWrapper>
      )}
    </Wrapper>
  );
};

export default ReviewList;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  overflow: auto;
`;

const EmptyWrapper = styled.div`
  margin-top: 200px;
  font-size: 2rem;
  color: #555555;
`;
