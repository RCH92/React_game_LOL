import React from "react";
import "./style.css";

function Card(props) {
    console.log(props);
    return (
        <div
        style={{ backgroundImage: `url("${props.img[0]}")`}}
        className={`card`}
        onClick={() => {
            props.cardClick(props.id)
        }}
        />
    )
}

export default Card;