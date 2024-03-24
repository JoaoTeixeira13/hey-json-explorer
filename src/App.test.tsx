import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Response", () => {
    render(<App />);
    const linkElement = screen.getByText(/Response/i);
    expect(linkElement).toBeInTheDocument();
});
