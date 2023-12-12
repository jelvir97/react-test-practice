import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin"
import TEST_COIN from "./_testCommon";

it('should render correctly', ()=>{
    render(<Coin side={TEST_COIN[0]}/>);
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<Coin side={TEST_COIN[0]}/>);
    expect(asFragment).toMatchSnapshot();
})

