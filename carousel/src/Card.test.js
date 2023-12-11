import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card"

it('should render correctly', ()=>{
    render(<Card />)
})

it("matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });