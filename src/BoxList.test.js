import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "4", width = "4", color = "green") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const colorInput = boxList.getByLabelText("Color");

    fireEvent.change(colorInput, { target: { value: color } });
    fireEvent.change( widthInput, {target: { value: width } });
    fireEvent.change( heightInput, {target: { value: height } });

    // const button = boxList.getBytext("Add a box");
    fireEvent.click(boxList.getBytext("Add a box"));
}

it("renders without crashing", function() {
    render(<BoxList />);
  });
  
it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add new boxes", function() {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();

    addBox(boxList);

    // const removeButton = boxList.getByText("Remove Box");
    expect(boxList.getByText("Remove Box")).toBeInTheDocument();
    expect(boxList.getByText("Remove Box").previousSibling).toHaveStyle(`
      width: 4em;
      height: 4em;
      background-color: green;
    `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
  
    // const removeButton = boxList.getByText("Remove Box");
  
    fireEvent.click(boxList.getByText("Remove Box"));
    expect(boxList.getByText("Remove Box")).not.toBeInTheDocument();
  });
  