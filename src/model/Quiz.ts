export type QuizDifficulty = "Easy" | "Normal" | "Hard";

export type QuizStatus = "start" | "inprogress" | "done";
export type QuizStartOptions = {
  difficulty: QuizDifficulty;
};

export const QUIZ_DIFFICULTYS: QuizDifficulty[] = ["Easy", "Normal", "Hard"];

class Quiz {}

export default Quiz;
