import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";
import { QUIZ_DIFFICULTYS } from "model/Quiz";
import { getQuizMockResponse } from "api/mock";
import { decodeString } from "utils";

const server = setupServer(
  rest.get("https://opentdb.com/api.php", (req, res, ctx) => {
    return res(ctx.json(getQuizMockResponse()));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders App", async () => {
  render(<App />);

  const mainButtonElement = screen.getByText("퀴즈 풀기");
  expect(mainButtonElement).toBeInTheDocument();
  fireEvent.click(mainButtonElement);

  expect(screen.getByText("퀴즈의 난이도를 선택해주세요.")).toBeInTheDocument();
  expect(screen.queryByText("시작하기")).not.toBeInTheDocument();

  const difficultyButtonElement = screen.getByText(QUIZ_DIFFICULTYS[0]);
  fireEvent.click(difficultyButtonElement);

  const startQuizButtonElement = screen.queryByText("시작하기");
  expect(startQuizButtonElement).toBeInTheDocument();
  fireEvent.click(startQuizButtonElement);

  expect(screen.getByText(/^퀴즈 만드는 중/)).toBeInTheDocument();

  expect(await screen.findByText("QUESTION")).toBeVisible();

  const quizMockData = getQuizMockResponse();

  for (const item of quizMockData.results) {
    const question = decodeString(item.question);
    const correctAnswer = decodeString(item.correct_answer);
    expect(await screen.findByText(question)).toBeInTheDocument();
    fireEvent.click(screen.getByText(correctAnswer));

    const nextButtonElement = await screen.findByText("다음 문항");
    expect(nextButtonElement).toBeVisible();
    fireEvent.click(nextButtonElement);
  }

  expect(await screen.findByText("다시 풀기")).toBeInTheDocument();
});
