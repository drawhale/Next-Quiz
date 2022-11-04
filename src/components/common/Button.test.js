import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("components/common/Button", () => {
  const buttonText = "TEST BUTTON";

  test("Button should be in document", () => {
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button should be show when visible is true", () => {
    render(<Button visible={true}>{buttonText}</Button>);
    const showElement = screen.getByText(buttonText);
    expect(showElement).toBeInTheDocument();
  });

  test("Button should be hide when visible is false", () => {
    render(<Button visible={false}>{buttonText}</Button>);
    const hideElement = screen.queryByText(buttonText);
    expect(hideElement).not.toBeInTheDocument();
  });

  test("Button should be excute callback", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    fireEvent.click(screen.getByText(buttonText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
