import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders the intro heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /thiago porto/i })
  ).toBeInTheDocument();
});
