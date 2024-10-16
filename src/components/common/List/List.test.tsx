import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import List from "./List";

describe("List component", () => {
  const mockData = [
    {
      time: "2024-10-16T12:00:00Z",
      rewards: 2.5,
      rewardInUsd: 2500,
      transactionCount: 120,
    },
    {
      time: "2024-10-15T08:30:00Z",
      rewards: 3.0,
      rewardInUsd: 3000,
      transactionCount: 140,
    },
  ];

  const renderMock = (item: { time: string; rewardInUsd: number }) => {
    return (
      <div>
        {item.time}: ${item.rewardInUsd}
      </div>
    );
  };

  it("renders the title when provided", () => {
    render(<List title="Block Rewards" render={renderMock} data={mockData} />);

    const titleElement = screen.getByText("Block Rewards");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders list items based on the data and render prop", () => {
    render(<List render={renderMock} data={mockData} />);

    const firstItem = screen.getByText("2024-10-16T12:00:00Z: $2500");
    const secondItem = screen.getByText("2024-10-15T08:30:00Z: $3000");

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
  });

  it("renders without the title when title is not provided", () => {
    render(<List render={renderMock} data={mockData} />);

    const titleElement = screen.queryByRole("heading");
    expect(titleElement).not.toBeInTheDocument();
  });
});
