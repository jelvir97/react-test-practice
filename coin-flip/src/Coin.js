import React from "react"

const Coin = ({side})=>(
    <div className="Coin">
        <img src={side} style={ {width: 200}}></img>
    </div>
)

export default Coin