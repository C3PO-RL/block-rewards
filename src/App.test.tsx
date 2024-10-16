import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders the App component", () => {
    render(<App />);
    screen.debug();
    const headingElement = screen.getByText(/Ethereum Block Rewards/i);
    expect(headingElement).toBeInTheDocument();
  });
});
