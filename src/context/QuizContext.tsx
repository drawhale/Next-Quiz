import { createContext, useEffect, useState, useContext } from "react";
import { getQuiz } from "api/quiz";
import { Quiz, QuizItem, QUIZ_QUEISTION_AMOUNT } from "model/Quiz";

import type { FC, ReactNode } from "react";
import type { QuizStatus, QuizStartOptions } from "model/Quiz";

type QuizContextValue = {
  quiz: Quiz;
  status: QuizStatus;
  onStartQuiz: (options: QuizStartOptions) => void;
};

const initialQuizContextValue: QuizContextValue = {
  quiz: new Quiz([]),
  status: "start",
  onStartQuiz: () => {},
};

const QuizContext = createContext(initialQuizContextValue);

type Props = {
  children: ReactNode;
};

export const QuizContextProvider: FC<Props> = ({ children }) => {
  const [quiz, setQuiz] = useState<Quiz>(new Quiz([]));
  const [status, setStatus] = useState<QuizStatus>("start");

  const startQuiz = async (options: QuizStartOptions) => {
    setStatus("prepare");

    const quizDatas = await getQuiz({
      amount: QUIZ_QUEISTION_AMOUNT,
      difficulty: options.difficulty.toLowerCase(),
    });

    const quizItems: QuizItem[] = quizDatas.map(
      (value: any) =>
        new QuizItem(
          value.category,
          value.question,
          value.correct_answer,
          value.incorrect_answers
        )
    );

    const quiz = new Quiz(quizItems);
    setQuiz(quiz);
    setStatus("inprogress");
  };

  const contextValue: QuizContextValue = {
    quiz,
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
