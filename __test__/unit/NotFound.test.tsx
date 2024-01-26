/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { render, screen } from "@testing-library/react";

import NotFound from "@/app/not-found";

describe("Order Table Component", () => {
  it("renders without crashing", () => {
    render(<NotFound />);

    const textLinks = ["Page Not Found", "Back to home"];

    textLinks.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const wrapper = screen.getByTestId("notfound-wrapper");
    expect(wrapper).toBeInTheDocument();
  });
});
