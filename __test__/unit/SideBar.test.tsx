/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import SideBar from "@/app/components/SideBar/SideBar";
import store from "@/app/store";
const queryClient = new QueryClient();
describe("Side Bar Component", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <SideBar />
          </QueryClientProvider>
        </Provider>
      );
    });

    const wrapper = await screen.findByTestId("sidebar-wrapper");
    const wrapperCount = await screen.findAllByTestId("sidebar-wrapper");
    const bodyCount = await screen.findAllByTestId("sidebar-body");
    const linkCount = await screen.findAllByTestId("link");

    expect(wrapper).toBeInTheDocument();
    expect(wrapperCount).toHaveLength(1);
    expect(bodyCount).toHaveLength(2);
    expect(linkCount).toHaveLength(11);
  });
});
