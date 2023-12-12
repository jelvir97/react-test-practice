import React, { useState } from "react"
import Coin from "./Coin"

const Game = ({sides})=>{
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
            
            {headsCounter===0 && tailsCounter===0 ? null : <Coin side={side} />}
            <span>Heads: {headsCounter}</span>
            <span>Tails: {tailsCounter}</span>
            <button onClick={btnClick}>FLIP!</button>
        </div>
    )
}

export default Game;