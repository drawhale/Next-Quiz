import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { QUIZ_DIFFICULTYS } from "model/Quiz";

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
});
