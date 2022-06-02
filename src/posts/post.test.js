/* eslint-disable testing-library/no-debugging-utils */
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import Post from "./Posts";

import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";

const fakers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(fakers),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test", () => {
  test("Renders data properly", async () => {
    const history = createMemoryHistory();
    await act(async () =>
      render(
        <Router location={history.location} navigator={history}>
          <Post />
        </Router>
      )
    );
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    });

    const button = screen.getByText(/Toggle button/);
    const text = screen.getByTestId("text");

    fireEvent.click(button);
    expect(text).toHaveTextContent("Toggle is disabled");

    fireEvent.click(button);
    expect(text).toHaveTextContent("Toggle is enabled");

    const aboutLink = screen.getByTestId("about-link");
    fireEvent.click(aboutLink);

    await waitFor(() => {
      expect(screen.getByTestId(/about-link/i)).toBeInTheDocument();
    })
  });
});
