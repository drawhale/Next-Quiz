import styled from "styled-components";
import { useQuizContext } from "context/QuizContext";
import QuizTemplate from "components/QuizTemplate";
import QuizHeader from "components/QuizHeader";
import QuizStart from "components/QuizStart";
import QuizList from "components/QuizList";

import type { FC } from "react";

const QuizMain: FC = () => {
  const quizContext = useQuizContext();
  console.log(quizContext);

  return (
    <QuizTemplate
      headerComponent={<QuizHeader />}
      contentComponent={<QuizStart />}
    />
  );
};

export default QuizMain;
