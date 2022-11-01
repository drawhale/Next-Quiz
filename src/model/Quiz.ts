export type QuizDifficulty = "Easy" | "Medium" | "Hard";

export type QuizStatus = "start" | "inprogress" | "done";
export type QuizStartOptions = {
  difficulty: QuizDifficulty;
};

export const QUIZ_QUEISTION_AMOUNT = 10;
export const QUIZ_DIFFICULTYS: QuizDifficulty[] = ["Easy", "Medium", "Hard"];

class Quiz {}

export default Quiz;
