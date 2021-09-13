import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={{ color: "", code: { hex: "" } }} />);
});

test("Renders the color passed into component", () => {
  render(<Color color={{ color: "blue", code: { hex: "#0000FF" } }} />);
  const colorWhite = screen.queryByText("blue");
  expect(colorWhite).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const deleteAction = jest.fn();
  const editAction = jest.fn();
  render(
    <Color
      deleteColor={deleteAction}
      toggleEdit={editAction}
      color={{ color: "blue", code: { hex: "#0000FF" } }}
    />
  );

  // findByTestID doesn't work, i dont know why? look at doc!

  const deleteButton = screen.queryByTestId("delete");
  userEvent.click(deleteButton);

  expect(deleteAction).toBeCalled();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const editAction = jest.fn();
  const onOffAction = jest.fn();

  render(
    <Color
      setEditColor={editAction}
      toggleEdit={onOffAction}
      color={{ color: "blue", code: { hex: "#0000FF" } }}
    />
  );

  const colorDiv = screen.queryByTestId("color");
  userEvent.click(colorDiv);

  expect(editAction).toBeCalled();
  expect(onOffAction).toBeCalled();
});
