/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { act, render, screen } from "@testing-library/react";

import OrderTable from "@/app/components/Table/OrderTable";
import store from "@/app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
const queryClient = new QueryClient();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Order Table Component", () => {
  it("renders without crashing", async () => {
    const isLoading: boolean = false;
    (useSelector as unknown as jest.Mock).mockImplementation((callback) => {
      return callback({ isLoading });
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <OrderTable />
          </QueryClientProvider>
        </Provider>
      );
    });

    const textLinks = ["Last Orders", "See All"];

    textLinks.forEach(async (title: string) => {
      expect(await screen.getByText(title)).toBeInTheDocument();
    });

    const titleCount = await screen.findAllByTestId("order-title");
    const tableHeaderCount = await screen.findAllByTestId("order-table-header");
    const table = await screen.findByTestId("order-table");

    expect(table).toBeInTheDocument();
    expect(tableHeaderCount).toHaveLength(5);
    expect(titleCount).toHaveLength(2);

    const dataCount = screen.getAllByTestId("order-table-row");
    expect(dataCount).toHaveLength(5);
  });
});
