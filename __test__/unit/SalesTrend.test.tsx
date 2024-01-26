/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import SalesTrend from "@/app/components/BarChart/SalesTrend";
import store from "@/app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, render, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
const queryClient = new QueryClient();

jest.mock("@tremor/react", () => ({
  ...jest.requireActual("@tremor/react"),
  BarChart: () => <div data-testid="mockBarChart">Mock BarChart</div>,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
describe("Sales Trend Component", () => {
  it("renders without crashing", async () => {
    const isLoading: boolean = false;
    (useSelector as unknown as jest.Mock).mockImplementation((callback) => {
      return callback({ isLoading });
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <SalesTrend />
          </QueryClientProvider>
        </Provider>
      );
    });

    const textLinks = ["Sales Trends", "Short by:"];

    textLinks.forEach(async (title: string) => {
      expect(await screen.findByText(title)).toBeInTheDocument();
    });

    const wrapper = await screen.findByTestId("sales-wrapper");
    const wrapperCount = await screen.findAllByTestId("sales-wrapper");
    const selectCount = await screen.findAllByTestId("sales-select");

    expect(wrapper).toBeInTheDocument();
    expect(wrapperCount).toHaveLength(1);
    expect(selectCount).toHaveLength(1);
    expect(await screen.findByTestId("mockBarChart")).toBeInTheDocument();
  });
});
