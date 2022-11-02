import { shuffle, decodeString, convertTimeStampToTime } from "utils";

export type QuizDifficulty = "Easy" | "Medium" | "Hard";

export type QuizStatus = "start" | "prepare" | "inprogress" | "done";
export type QuizStartOptions = {
  difficulty: QuizDifficulty;
};

export const QUIZ_QUEISTION_AMOUNT = 10;
export const QUIZ_DIFFICULTYS: QuizDifficulty[] = ["Easy", "Medium", "Hard"];

export class QuizItem {
  public category: string;
  public question: string;
  public incorrect_answers: string[];
  public correct_answer: string;

  constructor(
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
  ) {
    this.category = decodeString(category);
    this.question = decodeString(question);
    this.correct_answer = decodeString(correct_answer);
    this.incorrect_answers = shuffle([
      ...incorrect_answers.map((answer) => decodeString(answer)),
      this.correct_answer,
    ]);
  }
}

export class Quiz {
  public items: QuizItem[];

  private _start_timestamp: number;
  private _done_timestamp: number | null;

  private _current_question_index: number;
  private _correct_answer_indexs: number[];

  private _incorrect_answers: {
    questionIndex: number;
    selectedAnswer: string;
  }[];

  constructor(items: QuizItem[]) {
    this.items = items;
    this._start_timestamp = Date.now();
    this._done_timestamp = null;

    this._current_question_index = 0;
    this._correct_answer_indexs = [];
    this._incorrect_answers = [];
  }

  get currentQuestionIndex() {
    return this._current_question_index;
  }

  get nextQuestionIndex() {
    this._current_question_index = Math.min(
      this._current_question_index + 1,
      this.items.length - 1
    );
    return this._current_question_index;
  }

  get recordTime() {
    if (!this._done_timestamp) {
      return "00:00:00";
    }

    return convertTimeStampToTime(this._start_timestamp, this._done_timestamp);
  }

  get correctAnswerCount() {
    return this._correct_answer_indexs.length;
  }

  get incorrectAnswerCount() {
    return this._incorrect_answers.length;
  }

  get incorrectQueistions() {
    return this._incorrect_answers.map(({ questionIndex, selectedAnswer }) => ({
      ...this.items[questionIndex],
      selected_answer: selectedAnswer,
    }));
  }

  public solveQuestion(questionIndex: number, selectedAnswer: string) {
    const isCorrect =
      this.items[questionIndex].correct_answer === selectedAnswer;

    if (isCorrect) {
      this._correct_answer_indexs.push(questionIndex);
    } else {
      this._incorrect_answers.push({ questionIndex, selectedAnswer });
    }

    return isCorrect;
  }

  public done = () => {
    this._done_timestamp = Date.now();
  };

  public reset = () => {
    this._start_timestamp = Date.now();
    this._done_timestamp = null;
    this._current_question_index = 0;
    this._correct_answer_indexs = [];
    this._incorrect_answers = [];
  };
}
