import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("", () => {
  it("", () => {
    render(<Page />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
