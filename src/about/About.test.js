import { render, screen } from "@testing-library/react";
import About from "./About";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";

describe("Render about page", () => {
  test("should render about page", () => {
    const history = createMemoryHistory(['/about']);

    render(
      <Router location={history.location} navigator={history}>
        <About />
      </Router>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
