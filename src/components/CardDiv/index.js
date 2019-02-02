import React from "react";
import "./style.css";

function CardDiv(props) {
    return ( 
    <main className="CardDiv">
      <img src="/assets/images/Blitz_animated.gif" className="blitzCrank"></img>
      <div className="wrapper">{props.children}</div>
    </main>);
  }
  
  export default CardDiv;