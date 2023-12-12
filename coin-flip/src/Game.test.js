import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Game from "./Game";
import TEST_COIN from "./_testCommon";

beforeEach(function () {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function () {
  Math.random.mockRestore();
});

it("should render correctly", () => {
    
  render(<Game sides={TEST_COIN} />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<Game sides={TEST_COIN} />);
  expect(asFragment).toMatchSnapshot();
});

it("should not render coin at start", () => {
  const { container, debug } = render(<Game sides={TEST_COIN} />);
  expect(container.querySelector('img[alt="coinImg"]')).not.toBeInTheDocument();
});

it("should coin render coin at start when button is clicked", () => {
  const { container, getByText, debug } = render(<Game sides={TEST_COIN} />);
  expect(container.querySelector('img[alt="coinImg"]')).not.toBeInTheDocument();
  const flipButton = getByText("FLIP!");
  fireEvent.click(flipButton);
  expect(container.querySelector('img[alt="coinImg"]')).toBeInTheDocument();
});

it("should increment heads and tails count", () => {
  const { getByText } = render(<Game sides={TEST_COIN} />);
  const tCount = getByText("Tails: 0");
  const hCount = getByText("Heads: 0");
  const flipButton = getByText("FLIP!");
  fireEvent.click(flipButton);

  expect(hCount).toHaveTextContent('1')
  expect(tCount).toHaveTextContent('0')
  fireEvent.click(flipButton);
  expect(hCount).toHaveTextContent('1')
  expect(tCount) .toHaveTextContent('1')
});

