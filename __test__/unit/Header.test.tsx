/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import DashboardHeader from "@/app/components/Header/Header";
import store from "@/app/store";
const queryClient = new QueryClient();
describe("Header Component", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <DashboardHeader />
          </QueryClientProvider>
        </Provider>
      );
    });
    const textLinks = ["Daniel Olagunju", "daniel@daniel.com", "Dashboard"];

    textLinks.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const wrapper = await screen.findByTestId("header-wrapper");
    const wrapperCount = await screen.findAllByTestId("header-wrapper");
    const bodyCount = await screen.findAllByTestId("header-body");
    const linkCount = await screen.findAllByTestId("header-data");

    expect(wrapper).toBeInTheDocument();
    expect(wrapperCount).toHaveLength(1);
    expect(bodyCount).toHaveLength(1);
    expect(linkCount).toHaveLength(4);
  });
});
