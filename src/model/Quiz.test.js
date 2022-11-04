import { convertTimeStampToTime, encodeString } from "utils";
import { Quiz, QuizItem, QUIZ_QUEISTION_AMOUNT } from "./Quiz";

describe("model/QuizItem", () => {
  const category = encodeString("category");
  const question = encodeString("question");
  const correct_answer = encodeString("Answer1");
  const incorrect_answers = [
    encodeString("Answer2"),
    encodeString("Answer3"),
    encodeString("Answer4"),
  ];

  const quizItem = new QuizItem(
    category,
    question,
    correct_answer,
    incorrect_answers
  );

  test("property value should be decoded", () => {
    expect(quizItem.category).toBe("category");
    expect(quizItem.question).toBe("question");
    expect(quizItem.correct_answer).toBe("Answer1");
  });

  test("correct_answer should have in incorrect answers", () => {
    expect(quizItem.incorrect_answers.includes("Answer1")).toBe(true);
  });
});

describe("model/Quiz", () => {
  const quizItems = new Array(QUIZ_QUEISTION_AMOUNT)
    .fill(0)
    .map(
      (_, index) =>
        new QuizItem(
          encodeString(`category${index}`),
          encodeString(`question${index}`),
          encodeString("Answer1"),
          [
            encodeString("Answer2"),
            encodeString("Answer3"),
            encodeString("Answer4"),
          ]
        )
    );

  test("length of items should be equal QUIZ_QUEISTION_AMOUNT ", () => {
    const quiz = new Quiz(quizItems);
    expect(quiz.items.length).toBe(QUIZ_QUEISTION_AMOUNT);
  });

  test("get currentQuestionIndex should be 0 when initialized", () => {
    const quiz = new Quiz(quizItems);
    expect(quiz.currentQuestionIndex).toBe(0);
  });

  test("get nextQuestionIndex should be 1 when initialized", () => {
    const quiz = new Quiz(quizItems);
    expect(quiz.nextQuestionIndex).toBe(1);
  });

  test("solveQuestion() result should be true when correct_answer === selected_answer", () => {
    const quiz = new Quiz(quizItems);
    expect(quiz.solveQuestion(1, "Answer1")).toBe(true);
    expect(quiz.solveQuestion(2, "Answer2")).toBe(false);
    expect(quiz.solveQuestion(3, "Answer1")).toBe(true);
    expect(quiz.solveQuestion(4, "Answer2")).toBe(false);
    expect(quiz.solveQuestion(5, "Answer2")).toBe(false);

    expect(quiz.correctAnswerCount).toBe(2);
    expect(quiz.incorrectAnswerCount).toBe(3);
  });

  test("get recordTime should be not 00:00:00 when done", async () => {
    const quiz = new Quiz(quizItems);
    const timestamp1 = Date.now();

    expect(quiz.recordTime).toBe("00:00:00");

    await new Promise((r) => setTimeout(r, 2000));

    quiz.done();
    const timestamp2 = Date.now();

    const testRecordTime = convertTimeStampToTime(timestamp1, timestamp2);

    expect(quiz.recordTime).toBe(testRecordTime);
  });

  test("reset() should be initialize values", async () => {
    const quiz = new Quiz(quizItems);

    quiz.solveQuestion(1, "Answer1");
    expect(quiz.nextQuestionIndex).toBe(1);

    quiz.solveQuestion(2, "Answer2");
    expect(quiz.nextQuestionIndex).toBe(2);

    expect(quiz.correctAnswerCount).toBe(1);
    expect(quiz.incorrectAnswerCount).toBe(1);

    quiz.reset();

    expect(quiz.currentQuestionIndex).toBe(0);
    expect(quiz.correctAnswerCount).toBe(0);
    expect(quiz.incorrectAnswerCount).toBe(0);
  });
});
