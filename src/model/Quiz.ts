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
}

export class Quiz {
  public items: QuizItem[];

  private _start_timestamp: number;
  private _correct_answer_indexs: number[];
  private _incorrect_answer_indexs: number[];

  constructor(items: QuizItem[]) {
    this.items = items;
    this._start_timestamp = Date.now();
  }
}
