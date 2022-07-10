/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import Column from "./Column";

test("renders Column component", () => {
  render(
    <Column
      index={0}
      board={[{ title: "", rows: [""] }]}
      setBoard={(e: any) => ({ title: "", row: "" })}
    />
  );
  screen.debug();
});

test("should show input with initial value set", async () => {
  render(
    <Column
      index={0}
      board={[{ title: "", rows: [""] }]}
      setBoard={(e: any) => ({ title: "", row: "" })}
    />
  );
  const input = screen.getByRole("alert", { description: "" });
  expect(input).toBeInTheDocument();
  expect(input).toHaveClass("columnInput");
});
