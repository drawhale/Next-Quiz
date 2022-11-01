import styled from "styled-components";
import { useQuizContext } from "context/QuizContext";
import QuizTemplate from "components/QuizTemplate";
import QuizHeader from "components/QuizHeader";
import QuizStart from "components/QuizStart";
import QuizLoading from "components/QuizLoading";
import QuizList from "components/QuizList";

import type { FC, ReactNode } from "react";
import type { QuizStatus } from "model/Quiz";

type QuizComponentByStatus = {
  [key in QuizStatus]: ReactNode;
};

const QUIZ_PROCESS_COMPONENT: QuizComponentByStatus = {
  start: <QuizStart />,
  prepare: <QuizLoading />,
  inprogress: <QuizList />,
  done: <h1>Done</h1>,
};

const QuizMain: FC = () => {
  const quizContext = useQuizContext();

  return (
    <QuizTemplate
      headerComponent={<QuizHeader />}
      contentComponent={QUIZ_PROCESS_COMPONENT[quizContext.status]}
      // contentComponent={<QuizLoading />}
    />
  );
};

export default QuizMain;
