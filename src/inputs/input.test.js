import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);

describe("Renders Input", () => {
  test("should render input", () => {
    const mockSubmit = jest.fn((e) => e.preventDefault());
    render(<Input handleSubmit={mockSubmit} />);

    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form-submit");
    const button = screen.getByTestId("btn-submit");

    const inputValue = "Hello, world!";

    fireEvent.change(input, { target: { value: inputValue } });
    expect(input).toHaveValue(inputValue);
    fireEvent.submit(form);
    expect(mockSubmit).toHaveBeenCalled();
    fireEvent.click(button);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
