import React from "react";
import "./style.css";

function Instructions() {
    return (
        <div className="instructions">
            <img src="/assets/Images/blitzcrank-pngtrim.png" id="tfEther"></img>
            <div className="instructionText">
                <h1>Instructions:</h1>
                <h2>Click only the cards you haven't clicked yet.</h2>
            </div>
            <div id="spacer"></div>
        </div>
    )
}
export default Instructions;