/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { act, render, screen } from "@testing-library/react";

import PlatformTable from "@/app/components/Table/PlatformTable";
import store from "@/app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
const queryClient = new QueryClient();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Platform Table Component", () => {
  it("renders without crashing", async () => {
    const isLoading: boolean = false;
    (useSelector as unknown as jest.Mock).mockImplementation((callback) => {
      return callback({ isLoading });
    });
    await act(async () => {
      render(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <PlatformTable />
          </QueryClientProvider>
        </Provider>
      );
    });

    const textLinks = ["Top Platforms", "See All"];

    textLinks.forEach(async (title: string) => {
      expect(await screen.findByText(title)).toBeInTheDocument();
    });

    const titleCount = await screen.findAllByTestId("platform-title");
    const bodyCount = await screen.findAllByTestId("platform-body");

    expect(bodyCount).toHaveLength(1);
    expect(titleCount).toHaveLength(2);

    const dataCount = await screen.findAllByTestId("platform-data");
    expect(dataCount).toHaveLength(5);
  });
});
