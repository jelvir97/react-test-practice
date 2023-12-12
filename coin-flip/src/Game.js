import React, { useState } from "react"
import Coin from "./Coin"

const sides = ['https://www.littletoncoin.com/shop/api/assets/LCCCatalogAssetStore/images/catalog/products/600x600/8500.60_A.png',
                'https://www.littletoncoin.com/shop/api/assets/LCCCatalogAssetStore/images/catalog/products/600x600/8500.60_B.png']

const Game = ()=>{
    const randSide = ()=> Math.random() > .5 ? sides[0]: sides[1]
    const [side,setSide] = useState(randSide())
    const [headsCounter, setHeadsCounter] = useState(0)
    const [tailsCounter, setTailsCounter] = useState(0)

    function btnClick(){
        const side = randSide()
        setSide(side)
        side == sides[0] ? setHeadsCounter(headsCounter +1) :setTailsCounter(tailsCounter +1)
    }
    return (
        <div className="Game">
            
            <Coin side={side} />
            <span>Heads: {headsCounter}</span>
            <span>Tails: {tailsCounter}</span>
            <button onClick={btnClick}>FLIP!</button>
        </div>
    )
}

export default Game;