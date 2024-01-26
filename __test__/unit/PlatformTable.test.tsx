/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { render, screen } from "@testing-library/react";

import PlatformTable from "@/app/components/Table/PlatformTable";

describe("Platform Table Component", () => {
  it("renders without crashing", () => {
    render(<PlatformTable />);

    const textLinks = ["Top Platforms", "See All"];

    textLinks.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const titleCount = screen.getAllByTestId("platform-title");
    const bodyCount = screen.getAllByTestId("platform-body");

    expect(bodyCount).toHaveLength(1);
    expect(titleCount).toHaveLength(2);

    const dataCount = screen.getAllByTestId("platform-data");
    expect(dataCount).toHaveLength(5);
  });
});
