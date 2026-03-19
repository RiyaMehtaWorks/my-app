//UI TESTING
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { expect, test } from "vitest";

test("renders login button", () => {
  render(<LoginForm />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});

test("shows error on empty submit", async () => {
  render(<LoginForm />);
  const button = screen.getByText("Login");
  await userEvent.click(button);
  expect(screen.getByText("Email is required")).toBeInTheDocument();
});
/*
test("shows error on empty submit", async () => {
  render(<LoginForm />);
  const button = screen.getByText("Login");
  await userEvent.click(button);
  /////////////////////////////////////
  expect(screen.getByText("No email!")).toBeInTheDocument();
});
*/
