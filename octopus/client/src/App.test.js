import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { renderMock } from "./tools/render";

describe("App tests", () => {
  it("Loads the data from the product profile", async () => {
    const { fireEvent } = renderMock(<App />);
    await screen.findByText(/Energy saving light bulb/i);
  });

  test("should be able to increase and decrease product quantity", async () => {
    const { getByText, getByLabelText } = renderMock(<App />);
    // screen.findByText(/Loading/i);
    await screen.findByText(/Energy saving light bulb/i);

    // Initial Value is 1
    expect(getByLabelText("quantity")).toHaveTextContent(1);

    //Add two items
    fireEvent.click(getByLabelText("Increase amount"));
    fireEvent.click(getByLabelText("Increase amount"));
    expect(getByLabelText("quantity")).toHaveTextContent(3);

    // Remove two items
    fireEvent.click(getByLabelText("Decrease amount"));
    fireEvent.click(getByLabelText("Decrease amount"));
    expect(getByLabelText("quantity")).toHaveTextContent(1);
  });

  test("should not be able to decrease product quantity if it's already 1 ", async () => {
    const { getByText, getByLabelText } = renderMock(<App />);
    await screen.findByText(/Energy saving light bulb/i);

    //Add two items
    expect(getByLabelText("quantity")).toHaveTextContent(1);
    fireEvent.click(getByLabelText("Decrease amount"));
    expect(getByLabelText("quantity")).toHaveTextContent(1);
  });

  test("should be able to add items to the basket", async () => {
    const { getByText, getByLabelText } = renderMock(<App />);
    await screen.findByText(/Energy saving light bulb/i);

    // Add 3 extra items
    fireEvent.click(getByLabelText("Increase amount"));
    fireEvent.click(getByLabelText("Increase amount"));
    fireEvent.click(getByLabelText("Increase amount"));
    // Add to cart
    fireEvent.click(getByLabelText("Add to cart"));
    // Check if items are added to the cart
    expect(getByLabelText("Total Items")).toHaveTextContent(4);

    // Add 2 more
    fireEvent.click(getByLabelText("Increase amount"));
    // Add to cart
    fireEvent.click(getByLabelText("Add to cart"));
    // Check if cart is updated
    expect(getByLabelText("Total Items")).toHaveTextContent(6);
  });
});
