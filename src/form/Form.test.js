import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Form from "./Form";

afterEach(cleanup);

describe("Render form", () => {
  test("should render form", () => {
    render(<Form />);
    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form");
    const button = screen.getByTestId("button");
    const mockSubmit = jest.fn();

    const inputValue = "test";

    fireEvent.change(input, { target: { value: inputValue } });
    expect(input).toHaveValue(inputValue);

    fireEvent.click(button);
    // expect(mockSubmit).toHaveBeenCalled();
  });
});
