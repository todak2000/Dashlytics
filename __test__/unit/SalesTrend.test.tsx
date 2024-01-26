/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import SalesTrend from "@/app/components/BarChart/SalesTrend";
import { act, render, screen } from "@testing-library/react";

jest.mock("@tremor/react", () => ({
  ...jest.requireActual("@tremor/react"),
  BarChart: () => <div data-testid="mockBarChart">Mock BarChart</div>,
}));

describe("Sales Trend Component", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(<SalesTrend />);
    });

    const textLinks = ["Sales Trends", "Short by:"];

    textLinks.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const wrapper = screen.getByTestId("sales-wrapper");
    const wrapperCount = screen.getAllByTestId("sales-wrapper");
    const selectCount = screen.getAllByTestId("sales-select");

    expect(wrapper).toBeInTheDocument();
    expect(wrapperCount).toHaveLength(1);
    expect(selectCount).toHaveLength(1);
    expect(screen.getByTestId("mockBarChart")).toBeInTheDocument();
  });
});
