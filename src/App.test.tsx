/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  screen.debug();
});

test("should show the title", () => {
  render(<App />);
  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("Kanban Board System");
  expect(header).toHaveClass("title");
});

test("should show the plus button", () => {
  render(<App />);
  const icon = screen.getByTitle("icon");
  expect(icon).toBeInTheDocument();
});
