import styled from "styled-components";
import { useQuizContext } from "context/QuizContext";
import QuizTemplate from "components/QuizTemplate";
import QuizHeader from "components/QuizHeader";
import QuizStart from "components/QuizStart";
import QuizLoading from "components/QuizLoading";
import QuizList from "components/QuizList";
import QuizDone from "components/QuizDone";

import type { FC, ReactNode } from "react";
import type { QuizStatus } from "model/Quiz";

type QuizComponentByStatus = {
  [key in QuizStatus]: ReactNode;
};

const QUIZ_PROCESS_COMPONENT: QuizComponentByStatus = {
  start: <QuizStart />,
  prepare: <QuizLoading />,
  inprogress: <QuizList />,
  done: <QuizDone />,
};

const QuizMain: FC = () => {
  const quizContext = useQuizContext();

  return (
    <QuizTemplate
      headerComponent={<QuizHeader />}
      contentComponent={QUIZ_PROCESS_COMPONENT[quizContext.status]}
    />
  );
};

export default QuizMain;
