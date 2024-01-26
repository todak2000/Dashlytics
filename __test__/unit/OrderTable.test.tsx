/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import { render, screen } from "@testing-library/react";

import OrderTable from "@/app/components/Table/OrderTable";

describe("Order Table Component", () => {
  it("renders without crashing", () => {
    render(<OrderTable />);

    const textLinks = ["Last Orders", "See All"];

    textLinks.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const titleCount = screen.getAllByTestId("order-title");
    const tableHeaderCount = screen.getAllByTestId("order-table-header");
    const table = screen.getByTestId("order-table");

    expect(table).toBeInTheDocument();
    expect(tableHeaderCount).toHaveLength(5);
    expect(titleCount).toHaveLength(2);

    const dataCount = screen.getAllByTestId("order-table-row");
    expect(dataCount).toHaveLength(5);
  });
});
