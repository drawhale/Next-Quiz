import { createContext, useEffect, useState, useContext } from "react";
import { getQuiz } from "api/quiz";
import { QUIZ_QUEISTION_AMOUNT } from "model/Quiz";

import type { FC, ReactNode } from "react";
import type { QuizStatus, QuizStartOptions } from "model/Quiz";

type QuizContextValue = {
  status: QuizStatus;
  onStartQuiz: (options: QuizStartOptions) => void;
};

const initialQuizContextValue: QuizContextValue = {
  status: "start",
  onStartQuiz: () => {},
};

const QuizContext = createContext(initialQuizContextValue);

type Props = {
  children: ReactNode;
};

export const QuizContextProvider: FC<Props> = ({ children }) => {
  const [status, setStatus] = useState<QuizStatus>("start");

  const startQuiz = async (options: QuizStartOptions) => {
    setStatus("inprogress");
    const quizData = await getQuiz({
      amount: QUIZ_QUEISTION_AMOUNT,
      difficulty: options.difficulty.toLowerCase(),
    });

    console.log(quizData);
  };

  const contextValue: QuizContextValue = {
    status,
    onStartQuiz: startQuiz,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const quizContext = useContext(QuizContext);
  return quizContext;
};
